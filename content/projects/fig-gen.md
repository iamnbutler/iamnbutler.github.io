---
visible: true
title: fig-gen
subtitle: >-
  Exploring the new Automator plugin for Figma.
date: "2021-11-06"
author: Nate Butler
summary: >-
  Exploring the new Automator plugin for Figma. I thought exploring a minimal generative series using pixels and mapping equations would be a fun way to try it out.
link: "https://github.com/iamnbutler/fig-gen"
---

## Generative Art with Figma & Automator

Exploring the new Automator plugin for Figma. I thought exploring a minimal generative series using pixels and mapping equations would be a fun way to try it out.

![Some select screens from my automation explorations](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-grid_2x_d5gs3h.png)

### Process

I started by pushing on nesting shapes – How does it look when you nest and rotate shapes continuously? I got some cool outcomes like below, but I realized that most of the gens would end up looking pretty similar, relying so heavily on rotation.

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/b73b6629-fddf-4034-8285-bd96ec06b148.png?_a=ATAABAA0)

Exploring a different direction, I remembered playing with graphing calculators back in high school – Using trig functions like sin, cos, and tan, I got some exciting results right off the bat.

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/e07de2b4-907a-4ec9-9861-e60886b81541.png?_a=ATAABAA0)

Once I found a few directions I liked, I realized that these gens would probably show best in some sort of frame, especially if I wanted to show a few together. I went with the simplest outline possible to keep everything monochrome and on theme.

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/f83f9955-29c9-4b3a-8fa8-4d49990bfc64.png?_a=ATAABAA0)

In the end, I didn't use any nesting to create each gen. Frames 1px tall and 1~6px wide (randomized) are charted in 2D along the x-axis using the repeat's {{index}}.

The generative functions are mostly created using sin, cos, tan, a randomizer variable, and {{index}} combined in different ways.

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/ef1088f2-cfed-41bf-81dd-4f3720d55f90.png?_a=ATAABAA0)

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/3f4b9e7c-735d-4269-92d0-a45aa1ff6398.png?_a=ATAABAA0)

My favorite thing so far about Automator is how quickly I was able to explore a ton of variations. I was able to create over 60 gens with some really wide variation in under 2 hours.

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/26e8dde3-280a-4e3a-88a3-c8c7aa885910.png?_a=ATAABAA0)

### Outcome

Here are some of my favorite gens:

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/a6f19515-0662-4568-a055-2fd8c6a4ba8b.png?_a=ATAABAA0)

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/7f80dc0f-4214-4cab-8898-e35a7a20f2e7.png?_a=ATAABAA0)

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/7886a82d-c8b7-47a5-98fa-10cb860f1b14.png?_a=ATAABAA0)

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/07c37999-cf3c-4022-8a04-b3aa0e3740bd.png?_a=ATAABAA0)

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/ce2dc427-4813-4454-b56a-42f432ef608f.png?_a=ATAABAA0)

![](https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/506jO5gdgrYj3cUmt3ShGTp65ag2/amkK5itPyDCD8tu6ewsn/33ab0d98-c2f8-4cd5-b121-c038f56bcad2.png?_a=ATAABAA0)

I'm looking forward to exploring another generative series soon, following everything I learned with this one!

You can find some of the JSON import files I saved as I was exploring in the [fig-gen](https://github.com/iamnbutler/fig-gen) repo.

---

[Jordan Singer](https://twitter.com/jsngr)'s[Automator](https://automator.design/) plugin is currently in closed beta. I can't wait to see what everyone is able to create once they get their hands on this!