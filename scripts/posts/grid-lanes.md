CSS just got a new display value: `grid-lanes`. It's the resolution to years of debate about how masonry layout should work on the web.

The syntax is dead simple:

```css
.grid {
  display: grid-lanes;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
```

That's it. Items flow into whichever column is shortest, packing vertically like bricks. No JavaScript. No library. The browser handles everything.

## How it works

Grid-lanes reuses all existing grid properties. `grid-template-columns`, `gap`, `grid-column: span 2` — they all work exactly as you'd expect. The difference is in how items are placed on the cross axis.

In regular CSS grid, items fill rows sequentially. Row 1 fills left to right, then row 2, and so on. Empty space below short items is wasted.

In grid-lanes, there are no rows. Items flow into the shortest column, like water finding the lowest point. A tall item in column 1 means the next item goes into column 2 or 3 instead. The result is a tightly packed layout with no wasted vertical space.

## Spanning

Items can span multiple columns:

```css
.featured { grid-column: span 2; }
```

The layout algorithm accounts for this — a 2-column span goes wherever 2 adjacent columns have the shortest combined height. You can also use explicit placement like `grid-column: 2 / 4` to pin items to specific lanes.

## flow-tolerance

This is new. `flow-tolerance` controls how picky the algorithm is about finding the shortest column:

```css
.grid {
  display: grid-lanes;
  flow-tolerance: 1em; /* default */
}
```

With a tolerance of `1em`, the browser treats columns within 1em of the same height as equal. This prevents items from constantly shuffling between columns over trivial height differences. Higher values create a more stable layout; lower values pack more aggressively.

## Waterfall vs. brick

Define columns and you get a **waterfall** layout (items flow top to bottom):

```css
grid-template-columns: repeat(3, 1fr);
```

Define rows instead and you get a **brick** layout (items flow left to right):

```css
grid-template-rows: 1fr 1fr 1fr;
```

The direction is determined by which axis you template.

## What about the old masonry syntax?

You might have seen `grid-template-rows: masonry` — that was Firefox's experimental implementation from 2020. The CSS Working Group spent years debating whether masonry should be part of grid or its own thing. `display: grid-lanes` is the resolution: a new display value that reuses grid properties but has its own layout algorithm.

The old syntax still works behind flags in Firefox and Safari, but `grid-lanes` is the future. All major browsers are implementing it.

## Browser support

As of February 2026: Safari Technology Preview 234+. Chrome and Firefox are actively implementing. For production, you can use `display: grid` as a fallback — browsers that don't understand `grid-lanes` will ignore it and use the grid declaration:

```css
.grid {
  display: grid;
  display: grid-lanes;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 180px;
  grid-auto-flow: dense;
  gap: 8px;
}
```

The grid fallback with `dense` auto-flow fills gaps and keeps things reasonable until grid-lanes lands everywhere. This site uses exactly this approach.
