---
visible: true
type: tip
title: Adding themed icons in Tailwind
subtitle: Using Tailind's fill-current to color svg icons in dark mode.
date: '2021-11-13'
author: Nate Butler
summary: >-
---
While setting up `@nuxtjs/color-mode` to work with `Tailwind.css`, I realized that getting SVG icons to respect the color mode was weird without writing extra css outside Tailwind.

Tailwind doesn't have `fill` or `stroke` colors like `text-green-500` or `bg-white`, which means that you can't do: 

```html
<svg class="fill-black dark:fill-white" ...>
	<path d="..." fill="inherit" />
</svg>
```

That is the first thing I thought of when I tried to get this working. It is possible to get this working by extending your `tailwind.config.js` (more [here](https://tailwindcss.com/docs/stroke#customizing)), but there is an easier way that allows you to style all icons at once: `stroke-current` (and `fill-current`).

## Using `stroke-current`

It wasn't obvious what this would do when it popped up in my IntelliSense when I try to complete `stroke-` the first time. `stroke-current` takes whatever text color is on it's parent and sets it's `stroke` to that color. This also gets re-applied when the color mode changes, which gives us a really simple way to swap svg colors as the theme changes.

In the end, it looks like this:

```html
<div class="text-black dark:text-white">
	<svg class="fill-current" ...>
		<path d="..." fill="inherit" />
	</svg>
	<svg class="fill-current" ...>
		<path d="..." fill="inherit" />
	</svg>
</div>
```

This will give us a black icon in light mode and a white icon in dark mode. Since the color is defined on the parents, we can also add more icons, and they will all be colored the same. 

## Adding active state variations

Since I was using this for a set of icons that have an active state, I also wanted these to change when the icon becomes active.

We can add a new text color directly to the SVG (or anything else it is wrapped in) when it is active, and `fill-current` will respect the new color.

Extending our example above:

```html
<div class="text-black dark:text-white">
	<svg 
		class="fill-current"
		:class="{ 'active text-black dark:text-white': $colorMode.preference === 'dark' }" 
	...>
		<path d="..." fill="inherit" />
	</svg>
	<svg 
		class="fill-current"
		:class="{ 'active text-black dark:text-white': $colorMode.preference === 'dark' }" 
	...>
		<path d="..." fill="inherit" />
	</svg>
</div>
```

This syntax is Vue, but whatever you are using should work as long as you can add the extra classes to the svg element.

## Next

I'm sure there is a way to clean this up more and make it so you don't have to add the active text colors on each icon. I'll update this if I find a cleaner solution.