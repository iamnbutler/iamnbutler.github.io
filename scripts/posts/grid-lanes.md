CSS has a new layout mode. `display: grid-lanes` — the thing everyone's been calling masonry for the past five years finally has a real spec.

It works like grid but items pack into the shortest column instead of filling rows sequentially. You define columns, items flow down. No fixed row heights, no gaps below short items.

```css
.grid {
  display: grid-lanes;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}
```

What's interesting about it:
- Reuses all existing grid properties. `grid-column: span 2` just works.
- `flow-tolerance` is a new property — controls how aggressively items pack. Default `1em` means columns within 1em of the same height are treated as equal. Prevents items shuffling around over tiny differences.
- Define columns and you get a waterfall layout. Define rows instead and you get a brick layout.

This isn't the old `grid-template-rows: masonry` thing from Firefox. That was an experiment from 2020. Grid-lanes is its own display value with its own layout algorithm — the CSSWG took five years of arguing to get here.

Browser support right now: Safari Technology Preview 234. Chrome and Firefox are working on it. For production you stack declarations — `display: grid` first, then `display: grid-lanes`. Browsers that don't understand grid-lanes ignore it and fall back to regular grid.

I'm using this on nate.rip with a dense grid fallback. When grid-lanes lands in stable browsers the layout will just get better without changing any code.
