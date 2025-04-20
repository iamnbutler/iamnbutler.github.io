---
title: "Adding Extended Context in GPUI"
description: "Make global items accessible from anywhere in your app through cx."
date: "2025-04-20"
---

Inevitably when building an app you have various state and data that you want accessible from anywhere in an app.

When using [`gpui`](https://www.gpui.rs/), thanks to Rust's powerful trait system, you can use an extension to do this–and it is pretty handy.

Let's take a look.

## How it works

Here's the basic idea:

1. Define a trait with the methods you want to add to `App`
2. Implement that trait for the `App` type
3. Use your methods wherever you have a reference to `App`

Minimally:

```rust
pub trait MyAppExt {
    fn say_hello(&self) -> String;
}

impl MyAppExt for App {
    fn say_hello(&self) -> String {
        "Hello from my App extension!".to_string()
    }
}
```

With this trait defined, you can use it wherever you have an App reference:

```rust
impl SomeStruct {
    fn greet(&self, cx: &App) {
        let greeting = cx.say_hello();
        println!("{}", greeting);
    }
}
```

## Example: Adding Convenient, Global Theme Access

Let's walk adding an example where you can access the theme anywhere from where you have an `App` reference.

Let's start by defining a basic theme:

```rust
use gpui::Hsla;

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
```

Now we need to make it accessible globally:

To make something accessible globally in gpui we need to create a global wrapper:

```rust
use std::ops::{Deref, DerefMut};
use std::sync::Arc;
use gpui::Global;

#[derive(Clone, Debug)]
pub struct GlobalTheme(pub Arc<Theme>);

impl Deref for GlobalTheme {
    type Target = Arc<Theme>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl DerefMut for GlobalTheme {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

impl Global for GlobalTheme {}
```

This wrapper lets us store our theme in App's global state and access it easily with dereferencing.

Then we can define a trait that we will use to extend `App`:

```rust
pub trait ActiveTheme {
    fn theme(&self) -> &Arc<Theme>;
}
```

This is a simple one, but you could define anything here... A whole theme registry, logic for swapping themes, etc.

Then we implement our extension on `App`:

```rust
impl ActiveTheme for App {
    fn theme(&self) -> &Arc<Theme> {
        &self.global::<GlobalTheme>().0
    }
}
```

Now we can use our extension in our UI:

```rust
pub struct AppExtensionExample {}

impl Render for AppExtensionExample {
    fn render(&mut self, _window: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .size_full()
            .items_center()
            .justify_center()
            .text_xs()
            .text_color(cx.theme().fg)
            .bg(cx.theme().bg)
            .child("Here are our theme colors!")
            .children(vec![
                div().w_6().rounded_full().bg(cx.theme().fg),
                div().w_6().rounded_full().bg(cx.theme().bg),
                div().w_6().rounded_full().bg(cx.theme().accent),
            ])
    }
}
```

Here is everything together (or grab the [gist](https://gist.github.com/iamnbutler/2c64442e807b93a02074218941fbe6b4):

```rust
//! # GPUI App extension example
//!
//! Add gpui to your Cargo.toml:
//!     gpui = { git = "https://github.com/zed-industries/zed", rev = "c04c5812b6295ab683fbf1900499330cbc2b3058"}

use gpui:{
    bounds, div, hsla, point, px, size, App, AppContext as _, Application, Context, FocusHandle,
    Global, Hsla, IntoElement, Menu, ParentElement as _, Render, Styled as _, TitlebarOptions,
    Window, WindowBounds, WindowOptions,
};
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

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

impl Theme {
    pub fn get_global(cx: &App) -> &Arc<Theme> {
        &cx.global::<GlobalTheme>().0
    }
}

#[derive(Clone, Debug)]
pub struct GlobalTheme(pub Arc<Theme>);

impl Deref for GlobalTheme {
    type Target = Arc<Theme>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl DerefMut for GlobalTheme {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

impl Global for GlobalTheme {}

pub trait ActiveTheme {
    fn theme(&self) -> &Arc<Theme>;
}

impl ActiveTheme for App {
    fn theme(&self) -> &Arc<Theme> {
        &self.global::<GlobalTheme>().0
    }
}

pub struct AppExtensionExample {
    focus_handle: FocusHandle,
}

impl Render for AppExtensionExample {
    fn render(&mut self, _window: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        let theme_colors = div().flex().gap(px(12.)).children(vec![
            div()
                .size_6()
                .rounded_full()
                .bg(cx.theme().fg)
                .border_1()
                .border_color(gpui::white().alpha(0.12)),
            div()
                .size_6()
                .rounded_full()
                .bg(cx.theme().bg)
                .border_1()
                .border_color(gpui::white().alpha(0.12)),
            div()
                .size_6()
                .rounded_full()
                .bg(cx.theme().accent)
                .border_1()
                .border_color(gpui::white().alpha(0.12)),
        ]);

        div()
            .flex()
            .flex_col()
            .flex_initial()
            .p_4()
            .w(px(200.0))
            .h(px(160.0))
            .justify_center()
            .items_center()
            .text_center()
            .text_xs()
            .text_color(cx.theme().fg)
            .bg(cx.theme().bg)
            .gap(px(6.))
            .child("Our theme colors!")
            .child(theme_colors)
    }
}

fn main() {
    Application::new().run(|cx: &mut App| {
        cx.set_menus(vec![Menu {
            name: "App Extensions".into(),
            items: vec![],
        }]);

        cx.set_global(GlobalTheme(Arc::new(Theme::default())));

        let window = cx
            .open_window(
                WindowOptions {
                    titlebar: Some(TitlebarOptions {
                        title: Some("App Extensions".into()),
                        ..Default::default()
                    }),
                    window_bounds: Some(WindowBounds::Windowed(bounds(
                        point(px(0.0), px(0.0)),
                        size(px(200.), px(160.)),
                    ))),
                    ..Default::default()
                },
                |_window, cx| {
                    cx.new(|cx| AppExtensionExample {
                        focus_handle: cx.focus_handle(),
                    })
                },
            )
            .unwrap();

        window
            .update(cx, |view, window, cx| {
                window.focus(&view.focus_handle);
                cx.activate(true);
            })
            .unwrap();
    })
}
```

Enjoy! I know gpui is still missing tons of examples. Let me know over on [bluesky](https://bsky.app/profile/nate.rip) if there is anything specific you want to see.
