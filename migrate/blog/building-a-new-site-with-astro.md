---
title: "Building a New Site with Astro"
description: "Notes on rebuilding my personal site with Astro."
date: "2024-02-26"
tags: ["eng"]
---

I rebuilt my personal site with Astro. Here's why and how.

Why Astro:
- Static output (HTML, CSS, JS only when needed)
- Content Collections for typed markdown
- Island architecture (interactive components only where needed)
- Fast builds
- MDX support

The site is a simple portfolio/blog. Content Collections handle blog posts, projects, shots (screenshots of design work), and curated lists. Each collection has a Zod schema for validation.

The design is intentionally minimal — a grid of cards on the home page, simple list views for content types, and clean article layouts for individual posts.

Deployment is GitHub Pages with a custom domain (nate.rip). The build runs in GitHub Actions on push to main.
