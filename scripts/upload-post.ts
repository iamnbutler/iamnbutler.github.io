/**
 * Upload a single post to atproto PDS.
 * Scans markdown for local image references, uploads them as blobs,
 * and rewrites the paths to PDS blob URLs.
 *
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload-post.ts <markdown-file> <fragmentId> [title]
 *        Add --dry-run to preview without uploading.
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { stripMarkdown, markdownContent } from './lib/markdown.js';
import { collectPostImages, parseFragmentId, parsePublishingArgs, preflightPublishing, publishingFetch } from './lib/publishing.js';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;

const PUBLICATION_URI = `at://${DID}/site.standard.publication/self`;

const { args, dryRun: DRY_RUN, publishedAt } = parsePublishingArgs(process.argv.slice(2));

const [file, idStr, titleOverride] = args;
if (!file || !idStr) {
  console.error('Usage: npx tsx scripts/upload-post.ts <file.md> <fragmentId> [title] [--date ISO] [--dry-run]');
  process.exit(1);
}
if (!PASSWORD && !DRY_RUN) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

function blobUrl(did: string, cid: string): string {
  return `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
}

const fragmentId = parseFragmentId(idStr);
let markdownText = readFileSync(resolve(file), 'utf-8');
const title = titleOverride || markdownText.split('\n')[0].replace(/^#\s*/, '').trim() || 'Untitled';
const mdDir = dirname(resolve(file));

// Validate and read every local image before any network writes.
const imageRefs = collectPostImages(markdownText, mdDir);

console.log(`Post: #${fragmentId} "${title}"`);
console.log(`Images: ${imageRefs.length} local reference(s) found`);
imageRefs.forEach(r => console.log(`  ${r.path} (${(r.bytes.length / 1024).toFixed(0)}KB)`));

if (DRY_RUN) {
  console.log('\n--dry-run: not uploading');
  process.exit(0);
}

async function main() {
  const agent = new AtpAgent({ service: 'https://bsky.social', fetch: publishingFetch });
  await agent.login({ identifier: HANDLE, password: PASSWORD! });
  await preflightPublishing({
    authenticatedDid: agent.session?.did,
    expectedDid: DID,
    fragmentId,
    listRecords: (params, options) => agent.com.atproto.repo.listRecords(params, options),
  });

  // Upload image blobs and rewrite markdown
  const blobs = [];
  for (const ref of imageRefs) {
    const { data } = await agent.uploadBlob(ref.bytes, { encoding: ref.mime });
    blobs.push(data.blob);

    const blob = data.blob;
    const cid = blob.ref?.$link ?? blob.ref?.toString?.() ?? String(blob.ref);
    const url = blobUrl(DID, cid);
    markdownText = markdownText.replace(ref.match, `![${ref.alt}](${url})`);
    console.log(`  blob: ${basename(ref.absPath)} → ${cid.slice(0, 12)}...`);
  }

  const record: Record<string, any> = {
    $type: 'site.standard.document',
    site: PUBLICATION_URI,
    path: `/f/${fragmentId}`,
    title,
    content: markdownContent(markdownText),
    textContent: stripMarkdown(markdownText),
    publishedAt: publishedAt ?? new Date().toISOString(),
    fragmentId,
    fragmentType: 'post',
  };

  if (blobs.length > 0) {
    record.images = blobs;
    record.coverImage = blobs[0];
  }

  const res = await agent.com.atproto.repo.createRecord({
    repo: agent.session!.did,
    collection: 'site.standard.document',
    record,
  });

  console.log(`\nUploaded: #${fragmentId} "${title}" → ${res.data.uri}`);
  if (blobs.length > 0) {
    console.log(`  ${blobs.length} image blob(s) attached`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
