---
title: "The Black Magic of Canvas and Text Editing"
description: "Notes on building text editing with HTML canvas."
date: "2025-03-29"
tags: ["eng"]
---

Building a text editor on HTML canvas is one of those things that sounds simple until you actually try it.

The browser gives you `measureText()` and `fillText()`. That's it. Everything else — cursor positioning, selection, line wrapping, scrolling, input handling, IME support, clipboard, undo/redo — you build from scratch.

Some things I learned:
- `measureText()` lies. The reported width doesn't always match the rendered width.
- Cursor positioning requires tracking every character's x-offset individually.
- Line wrapping is a word-boundary problem with surprisingly many edge cases.
- Selection rendering is just drawing colored rectangles behind text.
- IME input (for CJK languages) requires a hidden textarea overlay.
- Clipboard access is async and permissions-gated.

Canvas text editing is black magic because it forces you to reimplement everything the browser does for free with `<textarea>`. But sometimes that's exactly what you need — full control over rendering and behavior.
