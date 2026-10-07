import test from 'node:test';
import assert from 'node:assert/strict';
import { DID, fragmentsFromRecords, listRecords } from '../src/lib/atproto';

const record = (id = 1, overrides = {}) => ({
  uri: `at://${DID}/site.standard.document/key-${id}`,
  value: { site: `at://${DID}/site.standard.publication/self`, path: `/f/${id}`, fragmentId: id,
    fragmentType: 'post', title: `Post ${id}`, publishedAt: '2026-02-01T00:00:00Z', ...overrides },
});
const responses = (...pages: Response[]): typeof fetch => async () => {
  assert.ok(pages.length, 'unexpected request');
  return pages.shift()!;
};
const json = (data: unknown) => Response.json(data);

test('collection loading includes every page', async () => {
  const result = await listRecords('test', responses(json({ records: [1], cursor: 'next' }), json({ records: [2] })));
  assert.deepEqual(result, [1, 2]);
});
test('HTTP errors on later pages fail rather than returning partial content', async () => {
  await assert.rejects(listRecords('test', responses(json({ records: [1], cursor: 'next' }), new Response(null, { status: 503 }))), /HTTP 503/);
});
test('malformed listings and repeated cursors fail', async () => {
  await assert.rejects(listRecords('test', responses(json({}))), /Invalid listing/);
  await assert.rejects(listRecords('test', responses(json({ records: [], cursor: 2 }))), /Invalid listing/);
  await assert.rejects(listRecords('test', responses(json({ records: [], cursor: 'same' }), json({ records: [], cursor: 'same' }))), /Repeated pagination/);
});
test('network failures propagate', async () => {
  await assert.rejects(listRecords('test', async () => { throw new Error('offline'); }), /offline/);
});
test('valid fragments are sorted and image alt text is retained', () => {
  const result = fragmentsFromRecords([record(2), record(1, { publishedAt: '2025-01-01', images: [{ ref: { $link: 'cid' }, mimeType: 'image/png', alt: 'Description' }] })]);
  assert.deepEqual(result.map(f => f.id), [1, 2]);
  assert.equal(result[0].images?.[0].alt, 'Description');
});
test('duplicate IDs report both titles and the colliding URL', () => {
  assert.throws(() => fragmentsFromRecords([record(56, { title: 'Spool' }), record(56, { title: 'Breathe' })]), /Duplicate \/f\/56:.*Spool.*Breathe/);
});
test('empty content is rejected and other publications excluded', () => {
  assert.throws(() => fragmentsFromRecords([]), /No site fragments/);
  assert.deepEqual(fragmentsFromRecords([record(), record(2, { site: 'at://other/site.standard.publication/self' })]).map(f => f.id), [1]);
});
for (const [label, overrides] of Object.entries({
  id: { fragmentId: '1' }, zero: { fragmentId: 0 }, path: { path: '/wrong' }, date: { publishedAt: 'bad' },
  title: { title: '' }, type: { fragmentType: 'unknown' }, markdown: { content: { text: 1 } },
  images: { images: [{}] }, link: { fragmentType: 'link', externalUrl: 'javascript:alert(1)' },
})) {
  test(`invalid ${label} blocks generation`, () => assert.throws(() => fragmentsFromRecords([record(1, overrides)]), /Content validation failed/));
}
