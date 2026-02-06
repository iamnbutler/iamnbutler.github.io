I've been trying to get a masonry-ish layout working on this site for the homepage grid. Tried a polyfill, tried hacking dense grid into something passable — all kind of janky. Then I came across [Jen Simmons' post on the WebKit blog](https://webkit.org/blog/17660/introducing-css-grid-lanes/) about `display: grid-lanes` and it clicked.

This is the thing the CSSWG has been arguing about for five years. You might remember Firefox had `grid-template-rows: masonry` as an experiment back in 2020 — this isn't that. Grid-lanes is its own display value with its own layout algorithm. Items pack into the shortest column instead of filling rows. You define your columns and they just flow down.

The wild part is it reuses basically everything from grid. `grid-template-columns`, `gap`, even `grid-column: span 2` — it all just works. There's one new property, `flow-tolerance`, which controls how aggressively items pack. Default is `1em`, meaning columns within 1em of each other get treated as equal height. Prevents stuff from shuffling around over tiny pixel differences which is nice.

Here's what I'm using on this site right now:

```css
.mosaic {
  display: grid;
  display: grid-lanes;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 180px;
  grid-auto-flow: dense;
  gap: 8px;
}
```

The trick is stacking the display declarations — browsers that don't understand `grid-lanes` just ignore it and fall back to regular grid. The `grid-auto-rows` and `dense` flow keep things looking decent on everything else.

Browser support as of writing: Safari Technology Preview 234. Chrome and Firefox are working on it. So right now it's basically a progressive enhancement — when it lands in stable browsers the layout just gets better without changing anything.
