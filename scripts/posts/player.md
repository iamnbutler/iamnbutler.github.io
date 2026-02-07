# Player

[Player](https://github.com/iamnbutler/player) is a toy music player built with [GPUI](https://www.gpui.rs/), the GPU-accelerated UI framework that powers [Zed](https://zed.dev). It started as an excuse to build something real with GPUI outside of Zed's codebase — not a prototype or a widget demo, but an app with actual audio playback, keyboard navigation, OS media key integration, and a music library.

This was actually the second time around — almost exactly a year after the first attempt. The first one stalled out. This time the whole thing came together over two days. The commit history reads like a speed run: init, types, list view, library serialization, audio playback, keyboard controls, shuffle, media keys, scrubbing — roughly one feature per hour.

## The GPUI entity model

GPUI's core pattern is entities. Each component is a struct that implements `Render`, created with `cx.new(...)` and accessed through `Entity<T>` handles. Components communicate via events and subscriptions, not callbacks or shared state:

```rust
struct Player {
    library: Entity<Library>,
    list_view: Entity<ListView>,
    audio_player: Entity<AudioPlayer>,
    focus_handle: FocusHandle,
    shuffle: bool,
    repeat: RepeatMode,
    media_controls: Option<MediaControlsHandler>,
    _subscriptions: Vec<Subscription>,
}
```

The `Player` owns handles to its children and subscribes to their events during construction:

```rust
let subscriptions = vec![
    cx.subscribe(&list_view, Self::handle_list_view_event),
    cx.subscribe(&audio_player, Self::handle_audio_player_event),
];
```

When the `AudioPlayer` finishes a song or the `ListView` registers a double-click, they emit events. The `Player` dispatches accordingly — play the next track, update the now-playing highlight, push metadata to the OS. The entities stay decoupled. The parent wires them together.

## Audio with rodio

The audio backend is [rodio](https://github.com/RustAudio/rodio), which handles MP3 decoding via symphonia and outputs to the system audio device. Playing a song is: open file, decode, append to a sink.

```rust
pub fn play_song(&mut self, song: Song, cx: &mut Context<Self>) -> Result<(), AudioPlayerError> {
    self.stop_internal();

    let file = std::fs::File::open(&song.file.path)?;
    let source = Decoder::new(BufReader::new(file))?;

    let sink = Sink::try_new(&self.stream_handle)?;
    sink.set_volume(self.volume);
    sink.append(source);

    self.sink = Some(sink);
    self.current_song = Some(song.clone());
    self.state = PlaybackState::Playing;
    self.playback_started_at = Some(Instant::now());
    self.paused_position = Duration::ZERO;

    cx.emit(AudioPlayerEvent::SongChanged(Some(song)));
    cx.emit(AudioPlayerEvent::StateChanged(PlaybackState::Playing));
    Ok(())
}
```

Position tracking uses wall-clock time instead of querying rodio — track the `Instant` when playback started, accumulate paused time, and derive position from the delta. Simple and avoids the overhead of asking the audio thread.

## The progress bar problem

GPUI only re-renders when something calls `cx.notify()`. That's efficient for most UI — text, buttons, lists — but a progress bar needs to advance smoothly every frame during playback. The first version used nested divs with a relative width, but the real solution was GPUI's `canvas` primitive for direct painting:

```rust
canvas(
    move |bounds, _, _| bounds,
    move |bounds, _, window, _cx| {
        if is_playing {
            window.request_animation_frame();
        }

        let progress_width = bounds.size.width * progress;

        // Background track
        window.paint_quad(gpui::PaintQuad {
            bounds,
            corner_radii: gpui::Corners::all(px(2.0)),
            background: bg_color.into(),
            ..Default::default()
        });

        // Progress fill
        if progress > 0.0 {
            let progress_bounds = Bounds {
                origin: bounds.origin,
                size: gpui::Size {
                    width: progress_width,
                    height: bounds.size.height,
                },
            };
            window.paint_quad(gpui::PaintQuad {
                bounds: progress_bounds,
                corner_radii: gpui::Corners::all(px(2.0)),
                background: fg_color.into(),
                ..Default::default()
            });
        }
    },
)
```

The key line is `window.request_animation_frame()`. Without it, the bar only moves when discrete events fire. With it, GPUI schedules a repaint every frame while audio is playing — the bar sweeps smoothly, and stops requesting frames when paused.

Scrubbing builds on this — rodio's `Sink::try_seek()` repositions the decoder, and the wall-clock timer resets to keep everything in sync:

```rust
pub fn seek_to(&mut self, position: Duration, cx: &mut Context<Self>) {
    if let Some(sink) = &self.sink {
        if sink.try_seek(position).is_ok() {
            self.paused_position = position;
            if self.state == PlaybackState::Playing {
                self.playback_started_at = Some(Instant::now());
            }
            cx.notify();
        }
    }
}
```

## Keyboard controls

GPUI uses an actions system for keybindings. Actions are unit structs declared with a macro, bound to keys with optional context scoping:

```rust
// Global — work anywhere
cx.bind_keys([
    KeyBinding::new("space", TogglePlayback, None),
    KeyBinding::new("cmd-right", SkipNext, None),
    KeyBinding::new("cmd-left", SkipPrevious, None),
]);

// Scoped to ListView — only when the list has focus
cx.bind_keys([
    KeyBinding::new("j", SelectNext, Some("ListView")),
    KeyBinding::new("k", SelectPrevious, Some("ListView")),
    KeyBinding::new("enter", PlaySelected, Some("ListView")),
    KeyBinding::new("pagedown", PageDown, Some("ListView")),
]);
```

The context string ties to `.key_context("ListView")` set on the element tree during render. This means `j` and `k` do vim-style navigation in the track list, but don't interfere with anything else when focus is elsewhere. Actions get wired to handlers with `.on_action(cx.listener(Self::select_next))` on the element.

The track list itself uses GPUI's `uniform_list` for virtualized rendering — only visible rows get rendered, so a library with thousands of tracks scrolls without issue.

## Media controls with souvlaki

There's a moment when you're testing a music player and you instinctively tap your AirPod to pause — and nothing happens. You realize how many things you take for granted about audio apps. Media key support wasn't in the plan initially, but once playback worked it became obvious it had to be there.

[Souvlaki](https://github.com/Sinono3/souvlaki) handles the platform abstraction, but it uses a callback-based API that doesn't play well with GPUI's entity model. The solution was an `mpsc` channel bridge:

```rust
pub struct MediaControlsHandler {
    controls: MediaControls,
    receiver: Receiver<MediaKeyEvent>,
}
```

Souvlaki's callback sends events to the channel:

```rust
controls.attach(move |event: MediaControlEvent| {
    let media_event = match event {
        MediaControlEvent::Play => Some(MediaKeyEvent::Play),
        MediaControlEvent::Pause => Some(MediaKeyEvent::Pause),
        MediaControlEvent::Toggle => Some(MediaKeyEvent::Toggle),
        MediaControlEvent::Next => Some(MediaKeyEvent::Next),
        MediaControlEvent::Previous => Some(MediaKeyEvent::Previous),
        MediaControlEvent::Seek(SeekDirection::Forward) => Some(MediaKeyEvent::SeekForward),
        MediaControlEvent::SetPosition(pos) => Some(MediaKeyEvent::SetPosition(pos.0)),
        _ => None,
    };
    if let Some(event) = media_event {
        let _ = sender.send(event);
    }
});
```

Then the `Player` drains the channel every render frame:

```rust
fn poll_media_key_events(&mut self, cx: &mut Context<Self>) {
    let events: Vec<MediaKeyEvent> = self.media_controls
        .as_ref()
        .map(|c| c.poll_events())
        .unwrap_or_default();

    for event in events {
        match event {
            MediaKeyEvent::Toggle => self.toggle_playback(cx),
            MediaKeyEvent::Next => self.skip_next(cx),
            MediaKeyEvent::Previous => self.skip_previous(cx),
            MediaKeyEvent::SeekForward => {
                self.audio_player.update(cx, |p, cx| {
                    p.seek_by(Duration::from_secs(10), true, cx);
                });
            }
            // ...
        }
    }
}
```

Polling on render isn't the most elegant pattern, but it works because the progress bar already requests animation frames during playback — the poll runs at 60fps when music is playing, and on-demand otherwise.

## The duration problem

The biggest unexpected time sink was MP3 metadata. Some files don't have duration in their ID3 tags. Rodio's `total_duration()` returns `None` for these. Without a duration, you can't show a progress bar, can't show track length in the list, and `skip_previous` can't decide whether to restart or go back.

The fix was a repair pipeline: files with bad metadata get moved to a `Problem/` directory, then a repair pass decodes the entire file to calculate the actual duration and writes it back to the ID3 tags. This runs in parallel with rayon and reports progress back to the UI:

```rust
let results: Vec<Result<RepairResult, RepairFailure>> = files
    .into_par_iter()
    .map(|file| {
        let duration = calculate_duration_by_decoding(&path)
            .ok_or_else(|| RepairFailure { /* ... */ })?;

        write_duration_to_file(&path, duration)?;

        // Move back to Import/ for re-processing
        fs::rename(&path, &import_dest)?;
        Ok(RepairResult { path, duration, moved_to: import_dest })
    })
    .collect();
```

The progress reporting uses `futures::select_biased!` to interleave repair progress updates with the background task completion — the status bar shows "Repairing track.mp3 (14/38)" in real time while the rayon pool chews through the problem files.

## Library as JSONL

The library persists as a JSONL file — one JSON object per line at `~/Player/library.jsonl`. Loading streams line-by-line in batches of 100, adding songs to the library entity and calling `cx.notify()` after each batch so the UI updates progressively as the library loads:

```rust
for entry in reader {
    match entry {
        LoadedEntry::Song(song) => {
            batch.push(song);
            if batch.len() >= BATCH_SIZE {
                let songs = std::mem::take(&mut batch);
                let _ = library.update(cx, |lib, cx| {
                    for song in songs { lib.add_song(song); }
                    cx.notify();
                });
            }
        }
        // ...
    }
}
```

The whole thing — from `cargo run` to hearing music — is surprisingly quick. GPUI's retained rendering means the list view handles thousands of tracks without breaking a sweat, and the canvas-based progress bar is smoother than anything you'd get from DOM-style layout recalculation.
