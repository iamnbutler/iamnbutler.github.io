---
title: "Building UI in GPUI"
description: "An introduction to building user interfaces with Zed's GPUI framework."
date: "2025-04-27"
tags: ["eng", "rust", "gpui", "zed"]
---

GPUI is Zed's GPU-accelerated UI framework, written in Rust. It's an immediate-mode-inspired framework that renders directly to the GPU.

Key concepts:
- **Elements** are the building blocks. They implement `IntoElement` and describe what to render.
- **Views** are stateful components. They own data and render elements.
- **Actions** are the event system. They propagate up the view tree.
- **Styling** uses a Tailwind-like API: `div().flex().gap_2().bg(cx.theme().colors.background)`.

GPUI is not React. There's no virtual DOM, no reconciliation, no JSX. You build UI by calling Rust functions that describe layout and painting.

The framework re-renders the entire window on every frame (at 120fps). This sounds expensive, but because it's GPU-accelerated and written in Rust, it's fast enough.

Building UI in GPUI feels different from web development. You think in terms of layout and painting rather than DOM nodes and CSS. It's lower level, but the control you get is worth it.
