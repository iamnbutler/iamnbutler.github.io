---
title: "Building UI in gpui"
description: "An overview of how to build in gpui, and the tricks I've learned over the last 2 years."
date: "2025-04-27"
tags: ["eng", "gpui", "rust"]
---

A reasonably unstructured collection of tips and tricks for building UI in gpui.

This post will give a bit more flavor as we go to the examples in the [`gpui-examples`](https://github.com/iamnbutler/gpui-examples) repo.

## Application & Context

### Remove the default titlebar

[Example – Hide titlebar](https://github.com/iamnbutler/gpui-examples/tree/main/hide-titlebar)

This one is pretty straight forward. but immediately useful.

If you are building a reasonably custom looking UI, hiding the titlebar is one of the first things you will be looking to do.

Since this one is so short, I'll just share the whole main fn:

~~~rs
fn main() {
    let window_options = WindowOptions {
        titlebar: None,
        ..Default::default()
    };

    Application::new().run(|cx: &mut App| {
        cx.open_window(window_options, |_, cx| {
            // your app
        })
        .unwrap();

        cx.activate(true);
    });
}
~~~

Basically, just pass `None` to `titlebar` in `WindowOptions`. This will give you an app with no titlebar at all.

### Extending `cx`

[Example – Context Extension](https://github.com/iamnbutler/gpui-examples/tree/main/context-extension)

Add globally accessible data and methods with a central way to access them by extending `App`.

I have a full [post on this one](/blog/gpui-adding-extended-context/), but here is a quick example:

~~~rs
// Define a basic theme struct
#[derive(Clone, Debug)]
pub struct Theme {
    fg: Hsla,
    bg: Hsla,
    accent: Hsla,
}

impl Default for Theme {
    fn default() -> Self {
        Theme {
            fg: hsla(220.0 / 360.0, 9.0 / 100.0, 72.0 / 100.0, 1.0),
            bg: hsla(220.0 / 360.0, 14.0 / 100.0, 18.0 / 100.0, 1.0),
            accent: hsla(207.0 / 360.0, 82.0 / 100.0, 66.0 / 100.0, 1.0),
        }
    }
}

// Make it accessible globally
#[derive(Clone, Debug)]
pub struct GlobalTheme(pub Arc<Theme>);

impl Deref for GlobalTheme {
    type Target = Arc<Theme>;
    fn deref(&self) -> &Self::Target { &self.0 }
}

impl Global for GlobalTheme {}

// Define the extension trait
pub trait ActiveTheme {
    fn theme(&self) -> &Arc<Theme>;
}

// Implement the extension for App
impl ActiveTheme for App {
    fn theme(&self) -> &Arc<Theme> {
        &self.global::<GlobalTheme>().0
    }
}

// Set your global theme
fn main() {
    Application::new().run(|cx: &mut App| {
        // Initialize the global theme
        cx.set_global(GlobalTheme(Arc::new(Theme::default())));

        cx.open_window(window_options, |_window, cx| {
            // Now you can access the theme anywhere
            cx.new_view(|cx| MyView::new(cx))
        }).unwrap();
    });
}

// Then use your context extension anywhere
impl Render for MyView {
    fn render(&mut self, _: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .text_color(cx.theme().fg)
            .bg(cx.theme().bg)
            // ... other properties
    }
}
~~~
