---
title: "Generating a Content Index"
description: "Building an automated content index for a static site."
date: "2024-02-26"
tags: ["eng"]
---

One of the first things I built for the new site was an automated content index.

The index collects all content entries across collections (blog, projects, shots, lists) and sorts them by date. The home page renders this as a mixed-content grid.

Implementation is straightforward with Astro's Content Collections:

1. Query each collection
2. Map entries to a common shape (title, date, type, slug)
3. Sort by date descending
4. Render in a grid

The result is a home page that always shows the most recent content regardless of type. New blog post? It appears. New shot? It appears. No manual curation needed.
