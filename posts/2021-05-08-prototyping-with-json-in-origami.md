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
hero_image: >-
  https://storage.googleapis.com/yaminateo-image-bucket/img/thumbnail/origami-json-hero-4x1.jpg
---
When you are building a big prototype with lots of data (comments, images, post content, etc) things can change pretty fast. New designs come in, or a stakeholder wants to see some *small* change (spoiler: it isn't small) having a way to update that data on the fly and have it propagate in your prototype is a lifesaver.

This is where local JSON comes in. JSON objects are super handy in this sort of situation: 
- they can be nested (think a post with many comments) 
- can contain empty keys (not every piece of content needs to be filled out–this will come in handy later) 
- they are pretty user friendly to open up and edit, even for someone not overly code savvy.

Really you could use any data format here, but Origami can already use JSON arrays natively, and there are a bunch of useful patches for manipulating them.

## The Context

Let's build a little prototype driven by complex data. 

A feed of tweets with various content, comments and profile photos is a perfect demo.

## The Setup

What we will need:
- A series of profile photos, names, and profile URLs for our actors
- Some content for our posts
- Same as above for our comments on each post

The tools we will use:
- [Origami](origami.design)
- A spreadsheet or something like Airtable
- A TSV to JSON convertor

## Getting Started

We’re going to start by creating our JSON object. The beauty of this approach is while we are doing this by hand now, every step of this process ultimately can be automate depending on how much you will use it in the end.

First, we’re going to jump into our spreadsheet. I’ll show this both in Google Docs, and in Airtable, and show why I prefer the latter.

### Creating our JSON object in Google Docs

(WIP)

### Creating our JSON object in Airtable

(WIP)

### Converting our TSV into JSON

(WIP)

## Setting up our Origami File

Let's put our JSON aside for a minute and set up our Origami file to receive our data.

## Plugging in our JSON

(WIP)

## Possible Applications

(WIP)

## Wrap-up

(WIP)
