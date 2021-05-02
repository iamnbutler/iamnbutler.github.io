---
post_visible: true
status: published
title: Spacelink
subtitle: An exploration of infinite space and communication.
slug: 2016-05-11-spacelink
custom_slug: spacelink
date: '2016-05-11'
author: Nate Butler
primary_tag: project
tags:
  - project
  - art
summary: >-
  The ideas of space, space travel and communication in space have always
  fascinated me. As this is an art project I wanted to take a personal approach,
  exploring a topic that is important to me.
featured: true
show_thumbnail: true
thumbnail: https://storage.googleapis.com/yaminateo-image-bucket/img/spacelink-1x1.jpg
prefer_wide_thumbnail: true
wide_thumbnail: https://storage.googleapis.com/yaminateo-image-bucket/img/spacelink-2x1.jpg
hero_image: https://storage.googleapis.com/yaminateo-image-bucket/img/spacelink-hero.jpg
---
## The Project

This project is an exploration of infinite space and communication. The ideas of space, space travel and communication in space have always fascinated me. As this is an art project I wanted to take a personal approach, exploring a topic that is important to me. The goal of the assignment is to use a dataset to create art. I struggled to find a dataset that would allow me to do exactly what I wanted, so I decided to use the data I found as a creative medium rather than to use it as a direction for my narrative.

The dataset I used to generate this piece is a TSV from NASA detailing communications made on their network in 1995. Originally I wanted to find a set of data with communications between mission control and spacecrafts, but I couldn't find anything like that unfortunately. I decided to instead use the data I had to generate a map. I had some technical issues at first. I was attempting to map nodes to DOM elements, but quickly (less than 2000 nodes) the browser became sluggish and unresponsive. I then switched to SVG mapping, which allowed me to map over 35 thousand elements simultaneously.

We rarely stop to consider the huge amount of information that we are sending constantly, forever. Communication isn't a constant stream, but something sporadic. Seeing it visually mapped creates interesting and random forms, generating art as it goes. The map created is reminiscent of stars. Over time the map scrolls, showing the ever-continuing stream of data that is moving through a system. The piece is fascinating to watch, and because it is in constant motion it interesting forms that are found must be saved in your mind as they quickly disappear.

Of course since the data is from a set and not live we will eventually see repeating forms and patterns. If I had more time to explore this project I would have loved to bring in a live data stream to be mapped. I also would have like to build out controls that would allow the observer to manipulate the visuals of the art piece.

The visual style of the piece was inspired by old technology. The dataset is from 1995, as well as the "glory days" of NASA are in the past as well. The movement of the map is designed after tape-based data storage, where data would be recorded as a tape was fed through the system.

[View Project](http://iamnbutler.github.io/spacelink/) [View on Github](https://github.com/iamnbutler/spacelink)