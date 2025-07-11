---
title: "Immediate Mode GUI Resources"
description: "A reading list on Immediate Mode GUIs, in Rust and otherwise."
date: 2025-07-11
tags: ["eng"]
---

I'm working on a reading list for myself on Immediate Mode GUIs (mostly) in Rust. Below are some loosely organized links & resources I've found thus far! Feel free to [share more links](https://bsky.app/profile/nate.rip/post/3ltpfwsp3yc2d) and I'll take a look!

## Design

- [About the IMGUI Paradigm](https://github.com/ocornut/imgui/wiki) - Dear ImGui Wiki - Explains how UI state lives in your code rather than hidden in the library
- [Immediate-Mode Graphical User Interfaces (2005)](https://caseymuratori.com/blog_0001) - Casey Muratori - The original blog post that coined "IMGUI"
- [Why is UI in Rust So Hard?](https://www.warp.dev/blog/why-is-building-a-ui-in-rust-so-hard) - Warp Dev - Challenges of Rust's memory safety rules with traditional GUI patterns

## Managing State

- [Keyboard Focus & Event Routing](https://www.gamedeveloper.com/programming/keyboard-focus-and-event-trickling-in-immediate-mode-guis) - Niklas Gray - Implementing focus and input handling without persistent widget objects
- [State Handling Advantages](https://github.com/ocornut/imgui/wiki) - No duplicate state between UI and application, eliminating complex observer patterns

## Reflections

- [Dear ImGui Wiki & FAQs](https://github.com/ocornut/imgui/wiki) - Omar Cornut - Common questions and design trade-offs in IMGUI libraries
- [Ownership and data flow in GPUI](https://zed.dev/blog/gpui-ownership) - via [Nathan Sobo](https://github.com/nathansobo)
- [Xilem: an architecture for UI in Rust](https://raphlinus.github.io/rust/gui/2022/05/07/ui-architecture.html) - via [Raph Levien](https://github.com/raphlinus)

## Performance Techniques for Fast Frames

- [Batched Rendering](https://github.com/ocornut/imgui/wiki) - Grouping geometry by texture/material to minimize draw calls
- [Caching and Partial Updates](https://raphlinus.github.io/ui/druid/2019/11/22/reactive-ui.html) - Raph Levien - Recording display lists and reusing vertex buffers across frames

## Metal & Graphics

- [2D Graphics on Modern GPU](https://raphlinus.github.io/rust/graphics/gpu/2019/05/08/modern-2d.html)- via [Raph Levien](https://raphlinus.github.io/)
- [3 Years of Metal Retrospective](https://medium.com/@zeuxcg/3-years-of-metal-22d74969a21) - Arseny Kapoulkine - Experience porting a renderer to Metal on iOS/macOS (please write somewhere other than medium!)
- [Fast 2D Graphics on the GPU](https://raphlinus.github.io/rust/graphics/gpu/2020/06/13/fast-2d-rendering.html) - via [Raph Levien](https://raphlinus.github.io/)
- [Leveraging Rust and the GPU to render user interfaces at 120 FPS](https://zed.dev/blog/videogame) - via [Antonio Scandurra](https://github.com/as-cii)
- [Optimizing the Metal pipeline to maintain 120 FPS in GPUI](https://zed.dev/blog/120fps) - via [Nathan Sobo](https://github.com/nathansobo) & [Antonio Scandurra](https://github.com/as-cii)
- [Using Metal and Rust to make FFT even faster](https://blog.lambdaclass.com/using-metal-and-rust-to-make-fft-even-faster/) - LambdaClass - Using Rust with Apple's Metal API via metal-rs bindings

## Native macOS APIs

- [objc2: Calling macOS APIs from Rust with objc2](https://github.com/madsmtm/objc2) - (lib) Active Rust bindings for Objective-C runtime
- [Rust API Bindings: Core Foundation Memory Management and Mutability](https://alwaysprocessing.blog/2023/12/28/rust-ffi-cf-rc) - via [Always Processing](https://alwaysprocessing.blog/) - Wrapping Core Foundation and Cocoa APIs in safe Rust
