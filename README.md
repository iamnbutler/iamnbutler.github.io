# Hey, welcome to my open-build site

I'm Nate! Thanks for coming by.

Why does this site look basic or unfinished?
---------------------------

Welcome to my very 'build-in-the-open' personal site.

I'm a bit addicted to things being perfect before sharing. I've actually never shipped a personal site because of this.

This is my attempt to just throw everything out there, don't worry about things being unfinished, and just build everything a bit at a time.

Let's build a website
---------------------

I've been dreaming of a simple md-driven site for a long time. I've become a bit "files-on-disk" believer over the past little while, in a world that is increasingly storing everything in the cloud.

Structurally, my biggest personal inspiration for a website has been the Mac OS notes app for a few years now. I love the simple mental model of `folder → note → content`,So I'm giving it a shot to see where I get.

Here is a rough [~ *mood board* ~](https://www.figma.com/file/VNpgDenh0jr5gin1E5YoJt/v-14-moodboard?node-id=0%3A1) of some themes I have in my head. I don't know how much will influence the site in the end... I'm starting from structure and content first before style, as I tend to get lost in the visuals and never return to finish the rest 😅

Anyways...
----------

Hope you can find something fun in your time here!

You can check out the tech section below to see all the stuff I'll be exploring on this site.

For a less broken experience for now, you can follow me on [twitter](https://twitter.com/iamnbutler) here.

See you around!

## A rough list of all the tech used on this site

- next.js for a primary framework
- [next-themes](https://github.com/pacocoursey/next-themes) for easy mode themes
- [contentlayer](https://github.com/contentlayerdev/contentlayer) for handling feeding mdx content where I want it
- Vercel for hosting/previews
- Tailwind – Tailwind for fast iteration and maintainable components

## Additional Tech TODOs:

- [ ] Hook up [Fathom](https://usefathom.com/) analytics
- [ ] [Storybook](https://storybook.js.org/) for rendering and maintaining components
- [ ] [Algolia](https://www.algolia.com/) for filter/search
  - [ ] Set up Pre-build to create search/filter index for Algolia
- [ ] Better typography:
  - [ ] [capsize](https://seek-oss.github.io/capsize/) for predictible type sizes
  - [ ] See if [typography.js](https://github.com/KyleAMathews/typography.js) adds value combined with @tailwind/typography for typographic rythm
  - [text-balancer](https://github.com/nytimes/text-balancer) for more visually balanced titles &amp; less widows and orphans.
- [planetscale](https://planetscale.com/) for database needs