import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(`dist/${path}`, 'utf8');
assert.equal(read('CNAME').trim(), 'nate.rip');
const home = read('index.html');
assert.match(home, /<main\b/);
assert.equal((home.match(/aria-pressed="true"/g) ?? []).length, 5);
assert.match(home, /data-bsky-autoplay/);
assert.doesNotMatch(home, /<video[^>]*\sautoplay(?:\s|=|>)/);
for (let id = 1; id <= 8; id++) {
  const page = read(`f/${id}/index.html`);
  assert.match(page, /id="repeated-heading-1"/);
  assert.match(page, /href="#repeated-heading-1"/);
  assert.match(page, /rel="site.standard.document"/);
}
const shotTiles = home.match(/<a\b[^>]*data-type="shot"[^>]*>[\s\S]*?<\/a>/g) ?? [];
const tileFor = id => {
  const matches = shotTiles.filter(tile => tile.match(new RegExp(`href="/f/${id}"`)));
  assert.equal(matches.length, 1, `Exactly one homepage shot tile for fragment ${id}`);
  return matches[0];
};
for (const [id, variant] of [[5, 'tile-hero'], [6, 'shot-viewfinder'], [7, 'shot-evidence'], [8, 'shot-hud']]) {
  const page = read(`f/${id}/index.html`);
  const videos = page.match(/<video\b[^>]*>[\s\S]*?<\/video>/g) ?? [];
  assert.equal(videos.length, 1, `Exactly one player for fragment ${id}`);
  const video = videos[0];
  assert.match(video, /<video[^>]*\scontrols(?:\s|=|>)/);
  assert.match(video, /<video[^>]*\splaysinline(?:\s|=|>)/);
  assert.match(video, /<video[^>]*preload="metadata"/);
  assert.match(video, new RegExp(`aria-label="Fixture video ${id}"`));
  assert.match(video, new RegExp(`<source[^>]*fixture-video-${id}[^>]*type="video/mp4"`));
  assert.match(video, new RegExp(`<a[^>]*href="[^"]*fixture-video-${id}"`));
  assert.doesNotMatch(video, /\sautoplay(?:\s|=|>)|data-bsky-autoplay/);
  assert.doesNotMatch(page, new RegExp(`<img[^>]*fixture-video-${id}`));

  const tile = tileFor(id);
  assert.match(tile, new RegExp(`class="[^"]*\\b${variant}\\b`));
  assert.match(tile, new RegExp(`aria-label="Fixture video ${id}"`));
  assert.match(tile, new RegExp(`<video[^>]*fixture-video-${id}`));
  assert.match(tile, /<video[^>]*\smuted(?:\s|=|>)/);
  assert.match(tile, /<video[^>]*preload="metadata"/);
  assert.match(tile, /<video[^>]*aria-hidden="true"/);
  assert.match(tile, /<video[^>]*tabindex="-1"/);
  assert.doesNotMatch(tile, /<video[^>]*\s(?:autoplay|controls)(?:\s|=|>)|data-bsky-autoplay/);
  assert.doesNotMatch(tile, new RegExp(`<img[^>]*fixture-video-${id}`));
}
assert.match(read('f/2/index.html'), /<img[^>]*fixture-image[^>]*alt="Fixture image"/);
assert.match(tileFor(2), /<img[^>]*fixture-image/);
assert.match(read('f/5/index.html'), /<img[^>]*fixture-mixed-image[^>]*alt="Mixed gallery image"/);
assert.ok(read('demo/index.html'));
assert.match(read('.well-known/site.standard.publication'), /^at:\/\//);
console.log('Offline build smoke checks passed (8 fixture fragments; not production content).');
