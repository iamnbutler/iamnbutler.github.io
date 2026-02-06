/**
 * Delete all existing rip.nate.post records and re-upload from migrate/blog/
 * with the correct full content.
 *
 * Usage: ATP_PASSWORD=... npx tsx scripts/reupload-posts.ts [--dry-run]
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
const DRY_RUN = process.argv.includes('--dry-run');
if (!PASSWORD && !DRY_RUN) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }
const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const PDS = 'https://morel.us-east.host.bsky.network';

function parseDate(s: string): Date {
  const str = String(s).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return new Date(str + 'T00:00:00Z');
  const mdy = str.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (mdy) return new Date(`${mdy[3]}-${mdy[1]}-${mdy[2]}T00:00:00Z`);
  const d = new Date(str);
  if (isNaN(d.getTime())) throw new Error(`Cannot parse date: "${str}"`);
  return d;
}

// List existing post records from PDS
async function listPostRecords(): Promise<any[]> {
  const records: any[] = [];
  let cursor: string | undefined;
  do {
    const params = new URLSearchParams({ repo: DID, collection: 'rip.nate.post', limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const res = await fetch(`${PDS}/xrpc/com.atproto.repo.listRecords?${params}`);
    if (!res.ok) throw new Error(`listRecords failed: ${res.status}`);
    const data = await res.json();
    records.push(...(data.records ?? []));
    cursor = data.cursor;
  } while (cursor);
  return records;
}

// Read posts from migrate/blog/
function readMigratePosts() {
  const postsDir = join(process.cwd(), 'migrate', 'blog');
  const posts: { title: string; content: string; date: Date }[] = [];
  for (const file of readdirSync(postsDir)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(postsDir, file), 'utf-8');
    const { data: fm, content } = matter(raw);
    posts.push({
      title: fm.title,
      content: content.trim(),
      date: parseDate(fm.date),
    });
  }
  return posts.sort((a, b) => a.date.getTime() - b.date.getTime());
}

async function main() {
  let agent: AtpAgent | null = null;
  if (!DRY_RUN) {
    agent = new AtpAgent({ service: 'https://bsky.social' });
    await agent.login({ identifier: HANDLE, password: PASSWORD! });
    console.log(`Logged in as ${HANDLE}\n`);
  } else {
    console.log('[dry-run mode]\n');
  }

  // 1. Fetch existing post records
  const existing = await listPostRecords();
  console.log(`Found ${existing.length} existing post records on PDS`);

  // Show what we're deleting
  for (const r of existing) {
    const rkey = r.uri.split('/').pop();
    console.log(`  #${r.value.fragmentId} "${r.value.title}" (rkey: ${rkey}) — ${r.value.content.length} chars`);
  }

  // 2. Delete all existing post records
  if (!DRY_RUN) {
    console.log(`\nDeleting ${existing.length} post records...`);
    for (const r of existing) {
      const rkey = r.uri.split('/').pop()!;
      await agent!.com.atproto.repo.deleteRecord({
        repo: agent!.session!.did,
        collection: 'rip.nate.post',
        rkey,
      });
      console.log(`  Deleted rkey ${rkey}`);
      await new Promise(r => setTimeout(r, 100));
    }
  } else {
    console.log(`\n[dry-run] Would delete ${existing.length} records`);
  }

  // 3. Read full posts from migrate/blog/
  const posts = readMigratePosts();
  console.log(`\nRead ${posts.length} posts from migrate/blog/`);

  // We need the full fragment ID assignments from the original upload.
  // Posts are sorted by date and interleaved with shots/lists.
  // We need to reconstruct the same ordering to get the same fragmentIds.
  // Since we only have post records here, we'll read the existing fragmentIds
  // from the PDS records we just fetched and match by title.

  // Build normalized title -> { fragmentId, originalTitle } map from existing records
  const idMap = new Map<string, { fragmentId: number; pdsTitle: string }>();
  for (const r of existing) {
    const key = r.value.title.toLowerCase().replace(/[.\s]+$/g, '');
    idMap.set(key, { fragmentId: r.value.fragmentId, pdsTitle: r.value.title });
  }

  // 4. Re-upload with full content
  console.log(`\nUploading ${posts.length} posts with full content...`);
  for (const post of posts) {
    const key = post.title.toLowerCase().replace(/[.\s]+$/g, '');
    const match = idMap.get(key);
    if (!match) {
      console.warn(`  WARNING: No matching fragmentId for "${post.title}" — skipping`);
      continue;
    }
    const { fragmentId, pdsTitle } = match;
    // Use the PDS title to keep things consistent
    const title = pdsTitle;

    if (!DRY_RUN) {
      const res = await agent!.com.atproto.repo.createRecord({
        repo: agent!.session!.did,
        collection: 'rip.nate.post',
        record: {
          $type: 'rip.nate.post',
          fragmentId,
          title,
          content: post.content,
          createdAt: post.date.toISOString(),
        },
      });
      console.log(`  #${fragmentId} "${post.title}" → ${res.data.uri} (${post.content.length} chars)`);
    } else {
      console.log(`  [dry-run] #${fragmentId} "${title}" (${post.content.length} chars)`);
    }
    await new Promise(r => setTimeout(r, 100));
  }

  console.log('\nDone.');
}

main().catch(e => { console.error(e); process.exit(1); });
