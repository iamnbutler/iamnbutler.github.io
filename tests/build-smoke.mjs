import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(`dist/${path}`, 'utf8');
assert.equal(read('CNAME').trim(), 'nate.rip');
const home = read('index.html');
assert.match(home, /<main\b/);
assert.equal((home.match(/aria-pressed="true"/g) ?? []).length, 5);
assert.match(home, /data-bsky-autoplay/);
assert.doesNotMatch(home, /<video[^>]*\sautoplay(?:\s|=|>)/);
for (let id = 1; id <= 4; id++) {
  const page = read(`f/${id}/index.html`);
  assert.match(page, /id="repeated-heading-1"/);
  assert.match(page, /href="#repeated-heading-1"/);
  assert.match(page, /rel="site.standard.document"/);
}
assert.ok(read('demo/index.html'));
assert.match(read('.well-known/site.standard.publication'), /^at:\/\//);
console.log('Offline build smoke checks passed (4 fixture fragments; not production content).');
