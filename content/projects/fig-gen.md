---
title: fig-gen
subtitle: >-
  Exploring the new Automator plugin for Figma.
date: "2021-11-06"
author: Nate Butler
summary: >-
  Exploring the new Automator plugin for Figma. I thought exploring a minimal generative series using pixels and mapping equations would be a fun way to try it out.
mainImg: "https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-grid_2x_d5gs3h.png"
link: "https://github.com/iamnbutler/fig-gen"
---

## Generative Art with Figma & Automator

Exploring the new Automator plugin for Figma. I thought exploring a minimal generative series using pixels and mapping equations would be a fun way to try it out.

![Some select screens from my automation explorations](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-grid_2x_d5gs3h.png)

### Process

I started by pushing on nesting shapes – How does it look when you nest and rotate shapes continuously? I got some cool outcomes like below, but I realized that most of the gens would end up looking pretty similar, relying so heavily on rotation.

![](https://res.cloudinary.com/yaminateo/image/upload/v1636439394/project/fig-gen/radial-gen_sw0piw.png)

Exploring a different direction, I remembered playing with graphing calculators back in high school – Using trig functions like sin, cos, and tan, I got some exciting results right off the bat.

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/automator-steps_gapfqw.png)

Once I found a few directions I liked, I realized that these gens would probably show best in some sort of frame, especially if I wanted to show a few together. I went with the simplest outline possible to keep everything monochrome and on theme.

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/banner_efqxsf.png)

In the end, I didn't use any nesting to create each gen. Frames 1px tall and 1~6px wide (randomized) are charted in 2D along the x-axis using the repeat's {{index}}.

The generative functions are mostly created using sin, cos, tan, a randomizer variable, and {{index}} combined in different ways.

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/automator-steps_gapfqw.png)

My favorite thing so far about Automator is how quickly I was able to explore a ton of variations. I was able to create over 60 gens with some really wide variation in under 2 hours.

![](https://res.cloudinary.com/yaminateo/image/upload/v1636439418/project/fig-gen/gen-range_lhw4bg.png)

### Outcome

Here are some of my favorite gens:

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-21_2x_ljerb8.png)

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-11_2x_rb5ufp.png)

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-76_2x_nxhujm.png)

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-96_2x_qyfre1.png)

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-36_2x_orrj6q.png)

![](https://res.cloudinary.com/yaminateo/image/upload/v1636435580/project/fig-gen/gen-32_2x_au63qk.png)

I'm looking forward to exploring another generative series soon, following everything I learned with this one!

You can find some of the JSON import files I saved as I was exploring in the [fig-gen](https://github.com/iamnbutler/fig-gen) repo.

---

[Jordan Singer](https://twitter.com/jsngr)'s[Automator](https://automator.design/) plugin is currently in closed beta. I can't wait to see what everyone is able to create once they get their hands on this!