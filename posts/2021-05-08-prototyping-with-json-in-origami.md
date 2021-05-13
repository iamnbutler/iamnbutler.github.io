---
post_visible: true
status: published
title: Prototyping with JSON in Origami
subtitle: Using local JSON to streamline content for complex prototypes.
slug: 2021-05-08-prototyping-with-json-in-origami
date: '2021-05-08'
author: Nate Butler
primary_tag: dev
tags:
  - design
  - dev
  - education
series: Advanced Origami
series_number: 3
summary: >-
  Building large prototypes is complext enough, but managing content updates on
  the fly can become a real nightmare. Using local JSON to drive content in your
  prototypes can alleviate some of this pin.
edit: >-
  Internally at Facebook we use a slightly different build of Origami, but I'll
  try to make sure that everything here applies to what is publically available!
featured: true
show_thumbnail: true
thumbnail: >-
  https://storage.googleapis.com/yaminateo-image-bucket/img/thumbnail/origami-json-1x1.jpg
wide_thumbnail: >-
  https://storage.googleapis.com/yaminateo-image-bucket/img/thumbnail/origami-json-2x1.jpg
---
When you are building a big prototype with lots of data (comments, images, post content, etc) things can change pretty fast. New designs come in, or a stakeholder wants to see some *small* change (spoiler: it isn't small) having a way to update that data on the fly and have it propagate in your prototype is a lifesaver.

This is where local JSON comes in. JSON objects are super handy in this sort of situation: 
- they can be nested (think a post with many comments) 
- can contain empty keys (not every piece of content needs to be filled out–this will come in handy later) 
- they are pretty user friendly to open up and edit, even for someone not overly code savvy.

Really you could use any data format here, but Origami can already use JSON arrays natively, and there are a bunch of useful patches for manipulating them.

## The Context

Let's build a little prototype driven by complex data.

(WIP)