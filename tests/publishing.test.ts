import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import {
  collectPostImages, parseFragmentId, parsePublishedAt, parsePublishingArgs,
  preflightPublishing, publishingFetch, validateLinkUrl,
  type ListDocuments,
} from '../scripts/lib/publishing.js';

const DID = 'did:plc:expected-site';
const record = (value: unknown) => ({ value });
const preflight = (listRecords: ListDocuments, fragmentId = 58) => preflightPublishing({
  authenticatedDid: DID, expectedDid: DID, fragmentId, listRecords,
});

test('IDs must be entire decimal positive safe integers', () => {
  for (const value of ['', ' ', '1x', '12.3', '1e3', '0x10', '-1', '+1', '0', '000', '1 ', ' 1', '1\n', '9007199254740992', 'Infinity', 'NaN']) {
    assert.throws(() => parseFragmentId(value), /positive safe integer/, value);
  }
  assert.equal(parseFragmentId('1'), 1);
  assert.equal(parseFragmentId('0058'), 58);
  assert.equal(parseFragmentId(String(Number.MAX_SAFE_INTEGER)), Number.MAX_SAFE_INTEGER);
});

test('link URLs must be absolute HTTP(S) with a host', () => {
  for (const value of ['', 'not a url', '/relative', 'ftp://example.com', 'javascript:alert(1)', 'data:text/plain,test', 'https://', 'https://bad host', 'https:example.com', ' https://example.com']) {
    assert.throws(() => validateLinkUrl(value), /HTTP\(S\)/, value);
  }
  for (const value of ['https://example.com/a?q=x#hash', 'http://localhost:8080', 'HTTPS://example.com']) {
    assert.equal(validateLinkUrl(value), value);
  }
});

test('dates are validated and normalized before publishing', () => {
  assert.equal(parsePublishedAt('2024-02-29'), '2024-02-29T00:00:00.000Z');
  assert.equal(parsePublishedAt('2025-03-01T01:30:00+02:00'), '2025-02-28T23:30:00.000Z');
  for (const value of ['', ' ', 'yesterday', 'invalid', '2025-02-29', '2025-02-30', '2025-13-01', '2025-01-01T25:00:00Z']) {
    assert.throws(() => parsePublishedAt(value), /Invalid --date/, value);
  }
});

test('date option rejects missing, empty, invalid, and repeated values even in dry runs', () => {
  for (const args of [
    ['--date'], ['--date', '--dry-run'], ['--dry-run', '--date'],
    ['--date', ''], ['--date', 'bad', '--dry-run'], ['--date='], ['--date=bad'],
    ['--date', '2025-01-01', '--date', '2025-01-02'],
  ]) assert.throws(() => parsePublishingArgs(args), /--date/);
  assert.deepEqual(parsePublishingArgs(['post.md', '--dry-run', '58', '--date', '2025-01-01', 'Title']), {
    args: ['post.md', '58', 'Title'], dryRun: true, publishedAt: '2025-01-01T00:00:00.000Z',
  });
  assert.deepEqual(parsePublishingArgs(['url', '58']), { args: ['url', '58'], dryRun: false, publishedAt: undefined });
  assert.equal(parsePublishingArgs(['--date=2025-01-01']).publishedAt, '2025-01-01T00:00:00.000Z');
});

test('images are read up front, typed, and resolved relative to the post', () => {
  const reads: string[] = [];
  const bytes = new Uint8Array([1, 2, 3]);
  const images = collectPostImages('![a](./one.PNG) ![b](../two.jpg) ![remote](https://example.com/a.svg)', '/posts', path => {
    reads.push(path);
    return bytes;
  });
  assert.deepEqual(reads, [resolve('/posts', './one.PNG'), resolve('/posts', '../two.jpg')]);
  assert.equal(images.length, 2);
  assert.equal(images[0].mime, 'image/png');
  assert.equal(images[1].mime, 'image/jpeg');
  assert.equal(images[0].bytes, bytes);
  assert.equal(images[0].match, '![a](./one.PNG)');
});

test('a missing or unreadable local image fails even after a valid image', () => {
  assert.throws(() => collectPostImages('![a](ok.png) ![b](missing.png)', '/posts', path => {
    if (path.endsWith('missing.png')) throw new Error('ENOENT');
    return new Uint8Array([1]);
  }), /Cannot read local image: missing.png/);
});

test('unsupported local images fail rather than silently remaining in a published post', () => {
  let reads = 0;
  assert.throws(() => collectPostImages('![a](image.svg)', '/posts', () => {
    reads++;
    return new Uint8Array();
  }), /Unsupported image type/);
  assert.equal(reads, 0);
});

test('remote images require no local reads', () => {
  assert.deepEqual(collectPostImages('![a](https://example.com/x) ![b](HTTP://example.com/y)', '/posts', () => {
    assert.fail('must not read remote image');
  }), []);
});

test('wrong or absent authenticated DID fails before any listing', async () => {
  for (const authenticatedDid of [undefined, 'did:plc:wrong']) {
    await assert.rejects(preflightPublishing({
      authenticatedDid, expectedDid: DID, fragmentId: 58,
      listRecords: async () => assert.fail('must not list for the wrong DID'),
    }), /Authenticated DID/);
  }
});

test('preflight also rejects invalid numeric IDs', async () => {
  for (const fragmentId of [0, -1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    await assert.rejects(preflight(async () => assert.fail('must not list for an invalid ID'), fragmentId), /positive safe integer/);
  }
});

test('all pages are checked, while unrelated existing collisions are allowed', async () => {
  const cursors: (string | undefined)[] = [];
  await preflight(async (params, options) => {
    assert.equal(params.repo, DID);
    assert.equal(params.collection, 'site.standard.document');
    assert.equal(params.limit, 100);
    assert.ok(options.signal instanceof AbortSignal);
    cursors.push(params.cursor);
    if (!params.cursor) return { data: { records: [record({ fragmentId: 56, path: '/f/56' }), record({ fragmentId: 56, path: '/f/56' })], cursor: 'page-2' } };
    if (params.cursor === 'page-2') return { data: { records: [record({ fragmentId: 57, path: '/f/57' }), record({ fragmentId: 57, path: '/f/57' })], cursor: 'page-3' } };
    return { data: { records: [record({ fragmentId: 580, path: '/f/580' }), record({ path: '/f/58/other' })] } };
  });
  assert.deepEqual(cursors, [undefined, 'page-2', 'page-3']);
});

test('requested fragmentId OR path collision is rejected, including on later pages', async () => {
  for (const value of [{ fragmentId: 58, path: '/other' }, { fragmentId: 999, path: '/f/58' }, { fragmentId: '58' }]) {
    let calls = 0;
    await assert.rejects(preflight(async () => {
      calls++;
      return calls === 1 ? { data: { records: [], cursor: 'next' } } : { data: { records: [record(value)] } };
    }), /Fragment collision/);
    assert.equal(calls, 2);
  }
});

test('listing errors propagate, including a failure after an initially clean page', async () => {
  let calls = 0;
  await assert.rejects(preflight(async () => {
    if (++calls === 1) return { data: { records: [], cursor: 'next' } };
    throw new Error('PDS unavailable');
  }), /PDS unavailable/);
  assert.equal(calls, 2);
});

test('malformed listing data fails closed', async () => {
  for (const data of [{}, { records: null }, { records: [record(null)] }, { records: [], cursor: 42 }]) {
    await assert.rejects(preflight(async () => ({ data }) as never), /Invalid document/);
  }
});

test('cursor cycles fail closed instead of hanging', async () => {
  let calls = 0;
  await assert.rejects(preflight(async () => {
    calls++;
    return { data: { records: [], cursor: calls % 2 ? 'a' : 'b' } };
  }), /Repeated document listing cursor/);
  assert.equal(calls, 3);
});

test('a stalled listing times out and aborts its request', async () => {
  let signal: AbortSignal | undefined;
  await assert.rejects(preflightPublishing({
    authenticatedDid: DID, expectedDid: DID, fragmentId: 58, timeoutMs: 10,
    listRecords: async (_, options) => {
      signal = options.signal;
      return new Promise(() => {});
    },
  }), /timed out/);
  assert.equal(signal?.aborted, true);
});

test('publisher fetch adds a timeout signal and preserves caller cancellation without networking', async t => {
  const controller = new AbortController();
  let signal: AbortSignal | null | undefined;
  t.mock.method(globalThis, 'fetch', async (_input: unknown, init: RequestInit) => {
    signal = init.signal;
    return new Response('mock');
  });
  await publishingFetch('https://example.com');
  assert.ok(signal instanceof AbortSignal);
  assert.equal(signal.aborted, false);
  await publishingFetch('https://example.com', { signal: controller.signal });
  controller.abort();
  assert.equal(signal.aborted, true);
});

test('publisher dry-run exits and preflight precedes every blob/record write (source-only regression guard)', () => {
  for (const file of ['upload-post.ts', 'upload-link.ts']) {
    const source = readFileSync(new URL(`../scripts/${file}`, import.meta.url), 'utf8');
    const dryRun = source.indexOf('if (DRY_RUN)');
    const preflight = source.indexOf('await preflightPublishing(');
    const create = source.indexOf('await agent.com.atproto.repo.createRecord(');
    assert.ok(dryRun > 0 && dryRun < preflight && preflight < create);
    assert.match(source.slice(dryRun, preflight), /process\.exit\(0\)/);
    const upload = source.indexOf('await agent.uploadBlob(');
    if (upload !== -1) assert.ok(preflight < upload);
    assert.ok(source.includes('parsePublishingArgs(process.argv.slice(2))'));
    assert.ok(source.includes('parseFragmentId(idStr)'));
  }
});
