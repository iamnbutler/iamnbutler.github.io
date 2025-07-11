---
title: "Immediate Mode GUI Resources"
description: "A reading list on Immediate Mode GUIs, in Rust and otherwise."
date: 2025-07-11
tags: ["eng"]
---

## Design

- [Immediate-Mode Graphical User Interfaces (2005)](https://caseymuratori.com/blog_0001) - Casey Muratori - The original blog post that coined "IMGUI"
- [About the IMGUI Paradigm](https://github.com/ocornut/imgui/wiki) - Dear ImGui Wiki - Explains how UI state lives in your code rather than hidden in the library
- [Casey Muratori's IMGUI Video (2005)](https://mollyrocket.com/forums/viewtopic.php?t=134) - Historical video that inspired many modern IMGUI libraries
- [Why is UI in Rust So Hard?](https://www.warp.dev/blog/why-is-building-a-ui-in-rust-so-hard) - Warp Dev - Challenges of Rust's memory safety rules with traditional GUI patterns
- [Rust 2021: GUI](https://raphlinus.github.io/rust/gui/2021/01/18/rust-2021-gui.html) - Raph Levien - Cross-platform abstractions and considerations for Rust GUI toolkits

## Managing State

- [State Handling Advantages](https://github.com/ocornut/imgui/wiki) - No duplicate state between UI and application, eliminating complex observer patterns
- [Keyboard Focus & Event Routing](https://ourmachinery.com/post/keyboard-focus-and-event-routing-in-immediate-mode-guis/) - Niklas Gray - Implementing focus and input handling without persistent widget objects

## Reflections

- [Dear ImGui Wiki & FAQs](https://github.com/ocornut/imgui/wiki) - Omar Cornut - Common questions and design trade-offs in IMGUI libraries

**GPUI**

- [Ownership and data flow in GPUI](https://zed.dev/blog/gpui-ownership) - via [Nathan Sobo](https://github.com/nathansobo)
- [Leveraging Rust and the GPU to render user interfaces at 120 FPS](https://zed.dev/blog/videogame) - via [Antonio Scandurra](https://github.com/as-cii)

## Performance Techniques for Fast Frames

- [Batched Rendering](https://github.com/ocornut/imgui/wiki) - Grouping geometry by texture/material to minimize draw calls
- [Caching and Partial Updates](https://raphlinus.github.io/ui/druid/2019/11/22/reactive-ui.html) - Raph Levien - Recording display lists and reusing vertex buffers across frames

## Metal

- [Using Metal and Rust to make FFT even faster](https://blog.lambdaclass.com/using-metal-and-rust-to-make-fft-even-faster/) - LambdaClass - Using Rust with Apple's Metal API via metal-rs bindings
- [3 Years of Metal Retrospective](https://aras-p.info/blog/2021/04/05/3-Years-of-Metal/) - Arseny Kapoulkine - Experience porting a renderer to Metal on iOS/macOS
- [Optimizing the Metal pipeline to maintain 120 FPS in GPUI](https://zed.dev/blog/120fps) - via [Nathan Sobo](https://github.com/nathansobo) & [Antonio Scandurra](https://github.com/as-cii)

## Native macOS APIs

- [Rust API Bindings for iOS & macOS](https://alwaysprocessing.blog/series/rust-bindings) - Always Processing - Wrapping Core Foundation and Cocoa APIs in safe Rust
- [Rust ❤️ Swift: Writing Cocoa Apps in Rust](https://kylewlacy.github.io/posts/cocoa-apps-in-rust/) - Kyle Lacy - Building macOS Cocoa GUI using the objc crate
