---
title: "Adding a Favicon in 2024"
description: "The surprisingly complicated state of favicons."
date: "2024-02-27"
tags: ["eng"]
---

Adding a favicon should be simple. It's not.

The minimum viable favicon in 2024:
- `/favicon.ico` — 32x32 for legacy browsers
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` — SVG for modern browsers
- `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` — 180x180 PNG for iOS

The SVG favicon is the best option for modern browsers. It scales to any size, supports dark mode via `prefers-color-scheme`, and is tiny.

You can skip: `manifest.json` icons (unless you're a PWA), `msapplication-TileImage` (IE is dead), and the 47 different PNG sizes that various generators recommend.

Keep it simple. SVG + ICO + Apple Touch Icon covers everything.
