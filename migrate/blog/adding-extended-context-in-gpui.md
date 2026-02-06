---
title: "Adding Extended Context in GPUI"
description: "How to add extended context to GPUI applications."
date: "2025-04-20"
tags: ["eng", "rust", "gpui", "zed"]
---

GPUI's context system lets you pass data down the view tree without prop drilling.

The pattern:
1. Define a context type
2. Set it on a parent view
3. Access it from any child view

This is similar to React's Context API, but it's type-safe and checked at compile time.

Extended context is useful for theming, configuration, and shared state that many components need. Rather than threading props through every intermediate component, you set the context once and any descendant can read it.

The key difference from React: GPUI contexts are not reactive by default. If you need reactivity, you wrap the value in a `Model<T>` which provides change tracking.
