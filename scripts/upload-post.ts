/**
 * Upload a single post to atproto PDS.
 * Scans markdown for local image references, uploads them as blobs,
 * and rewrites the paths to PDS blob URLs.
 *
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload-post.ts <markdown-file> <fragmentId> [title]
 *        Add --dry-run to preview without uploading.
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname, extname, basename } from 'path';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;

const PUBLICATION_URI = `at://${DID}/site.standard.publication/self`;

const rawArgs = process.argv.slice(2);
const DRY_RUN = rawArgs.includes('--dry-run');
const dateIdx = rawArgs.indexOf('--date');
const dateOverride = dateIdx !== -1 ? rawArgs[dateIdx + 1] : undefined;
const args = rawArgs.filter((a, i) => a !== '--dry-run' && a !== '--date' && (dateIdx === -1 || i !== dateIdx + 1));

const [file, idStr, titleOverride] = args;
if (!file || !idStr) {
  console.error('Usage: npx tsx scripts/upload-post.ts <file.md> <fragmentId> [title] [--date ISO] [--dry-run]');
  process.exit(1);
}
if (!PASSWORD && !DRY_RUN) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const MIME: Record<string, string> = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp',
};

function blobUrl(did: string, cid: string): string {
  return `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
}

const fragmentId = parseInt(idStr, 10);
let content = readFileSync(resolve(file), 'utf-8');
const title = titleOverride || content.split('\n')[0].replace(/^#\s*/, '').trim() || 'Untitled';
const mdDir = dirname(resolve(file));

// Find all markdown image references: ![alt](path)
const IMG_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;
const imageRefs: { match: string; alt: string; path: string; absPath: string }[] = [];

for (const m of content.matchAll(IMG_RE)) {
  const imgPath = m[2];
  // Skip URLs (already absolute)
  if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) continue;
  const absPath = resolve(mdDir, imgPath);
  if (!existsSync(absPath)) {
    console.warn(`  warning: image not found: ${imgPath} (resolved to ${absPath})`);
    continue;
  }
  const ext = extname(absPath).toLowerCase();
  if (!MIME[ext]) {
    console.warn(`  warning: unsupported image type: ${ext} (${imgPath})`);
    continue;
  }
  imageRefs.push({ match: m[0], alt: m[1], path: imgPath, absPath });
}

console.log(`Post: #${fragmentId} "${title}"`);
console.log(`Images: ${imageRefs.length} local reference(s) found`);
imageRefs.forEach(r => console.log(`  ${r.path} (${(readFileSync(r.absPath).length / 1024).toFixed(0)}KB)`));

if (DRY_RUN) {
  console.log('\n--dry-run: not uploading');
  process.exit(0);
}

async function main() {
  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier: HANDLE, password: PASSWORD! });

  // Upload image blobs and rewrite markdown
  const blobs = [];
  for (const ref of imageRefs) {
    const buf = readFileSync(ref.absPath);
    const ext = extname(ref.absPath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const { data } = await agent.uploadBlob(buf, { encoding: mime });
    blobs.push(data.blob);

    const blob = data.blob;
    const cid = blob.ref?.$link ?? blob.ref?.toString?.() ?? String(blob.ref);
    const url = blobUrl(DID, cid);
    content = content.replace(ref.match, `![${ref.alt}](${url})`);
    console.log(`  blob: ${basename(ref.absPath)} → ${cid.slice(0, 12)}...`);
  }

  const record: Record<string, any> = {
    $type: 'site.standard.document',
    site: PUBLICATION_URI,
    path: `/f/${fragmentId}`,
    title,
    textContent: content,
    publishedAt: dateOverride ? new Date(dateOverride).toISOString() : new Date().toISOString(),
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
