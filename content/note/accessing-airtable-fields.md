---
visible: true
type: gist
title: Accessing fields in Airtable
subtitle: 
date: '2021-04-17'
author: Nate Butler
summary: >-
---

# Accessing fields from the Airtable API

```js
// I spent forever trying to figure this out so I thought
// I'd just post this here in case someone else stumbles across it.
// If 'record' is your record object ("records.forEach(function (record)")
// You can access a field by using record.fields.YOUR_FIELD_NAME

// This example is me creating YAML frontmatter using fields from my Base.

const p = record.fields;

let frontMatter = {
  'post_visible': p.post_visible,
  status: p.status,

  title: title,
  subtitle: p.subtitle,
  slug: slug,
  'custom_slug': p.custom_slug,

  date: date,
  'date_updated': p.date_updated,
  author: p.author,

  'primary_tag': p.primary_tag,
  tags: p.tags,

  summary: p.summary,
  edit: p.edit,

  featured: p.featured,
  'show_thumbnail': p.show_thumbnail,
  thumbnail: p.thumbnail,
  'prefer_wide_thumbnail': p.prefer_wide_thumbnail,
  wide_thumbnail: p.wide_thumbnail,
  hero_image: p.hero_image,
  post_images: p.post_images,
};
```