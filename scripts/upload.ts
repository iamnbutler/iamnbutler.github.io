/**
 * Upload all content to atproto PDS as v23 fragments.
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload.ts
 *
 * Reads posts from migrate/blog/, lists and shots from git main branch.
 * Sorts everything chronologically and assigns global fragment IDs.
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const DRY_RUN = process.argv.includes('--dry-run');

type ContentItem = {
  type: 'post' | 'shot' | 'list';
  title: string;
  content: string;
  date: Date;
  shotDir?: string;
  imageFiles?: string[];
};

// Handle inconsistent date formats: YYYY-MM-DD, MM-DD-YYYY, "Mon DD, YYYY"
function parseDate(s: string): Date {
  const str = String(s).trim();
  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return new Date(str + 'T00:00:00Z');
  // MM-DD-YYYY
  const mdy = str.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (mdy) return new Date(`${mdy[3]}-${mdy[1]}-${mdy[2]}T00:00:00Z`);
  // Fallback (handles "Mon DD, YYYY", "Oct 26, 2019", etc.)
  const d = new Date(str);
  if (isNaN(d.getTime())) throw new Error(`Cannot parse date: "${str}"`);
  return d;
}

function gitShow(path: string): string {
  return execSync(`git show "main:${path}"`, { maxBuffer: 50 * 1024 * 1024 }).toString();
}

function gitShowBinary(path: string): Buffer {
  return execSync(`git show "main:${path}"`, { maxBuffer: 50 * 1024 * 1024 });
}

function gitLsDir(path: string): string[] {
  return execSync(`git ls-tree --name-only "main:${path}"`)
    .toString().trim().split('\n').filter(Boolean);
}

// --- Collect all content ---

const items: ContentItem[] = [];

// 1. Blog posts from migrate/blog/
const postsDir = join(process.cwd(), 'migrate', 'blog');
if (existsSync(postsDir)) {
  for (const file of readdirSync(postsDir)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(postsDir, file), 'utf-8');
    const { data: fm, content } = matter(raw);
    items.push({
      type: 'post',
      title: fm.title,
      content: content.trim(),
      date: parseDate(fm.date),
    });
  }
}
console.log(`Found ${items.length} posts`);

// 2. Lists from git main branch
const listDirs = gitLsDir('src/content/lists/');
for (const dir of listDirs) {
  try {
    const raw = gitShow(`src/content/lists/${dir}/index.md`);
    const { data: fm, content } = matter(raw);
    items.push({
      type: 'list',
      title: fm.title,
      content: content.trim(),
      date: parseDate(fm.date),
    });
  } catch (e) {
    console.warn(`Skipping list ${dir}: ${e}`);
  }
}
console.log(`Found ${items.filter(i => i.type === 'list').length} lists`);

// 3. Shots from git main branch
const shotDirs = gitLsDir('src/content/shots/');
for (const dir of shotDirs) {
  try {
    const raw = gitShow(`src/content/shots/${dir}/index.md`);
    const { data: fm, content } = matter(raw);

    // Get image files (everything except index.md)
    const allFiles = gitLsDir(`src/content/shots/${dir}/`);
    const imageFiles = allFiles.filter(f => f !== 'index.md');

    // Strip image markdown refs, keep text
    const textContent = content
      .replace(/!\[.*?\]\(\.\/.*?\)\n?/g, '')
      .trim();

    items.push({
      type: 'shot',
      title: fm.title || dir,
      content: textContent,
      date: parseDate(fm.date),
      shotDir: dir,
      imageFiles,
    });
  } catch (e) {
    console.warn(`Skipping shot ${dir}: ${e}`);
  }
}
console.log(`Found ${items.filter(i => i.type === 'shot').length} shots`);

// Sort chronologically, assign fragment IDs
items.sort((a, b) => a.date.getTime() - b.date.getTime());

console.log(`\nTotal: ${items.length} fragments\n`);
console.log('Fragment ID assignments:');
items.forEach((item, i) => {
  console.log(`  ${String(i + 1).padStart(3)} | ${item.type.padEnd(4)} | ${item.date.toISOString().slice(0, 10)} | ${item.title}`);
});

if (DRY_RUN) {
  console.log('\n--dry-run: not uploading');
  process.exit(0);
}

// --- Upload ---

const agent = new AtpAgent({ service: 'https://bsky.social' });
await agent.login({ identifier: HANDLE, password: PASSWORD });
console.log(`\nLogged in as ${HANDLE}`);

const MIME: Record<string, string> = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
};

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const fragmentId = i + 1;
  const createdAt = item.date.toISOString();

  if (item.type === 'post') {
    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.post',
      record: {
        $type: 'rip.nate.post',
        fragmentId,
        title: item.title,
        content: item.content,
        createdAt,
      },
    });
    console.log(`[${fragmentId}] post: ${item.title}`);

  } else if (item.type === 'list') {
    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.list',
      record: {
        $type: 'rip.nate.list',
        fragmentId,
        title: item.title,
        content: item.content,
        createdAt,
      },
    });
    console.log(`[${fragmentId}] list: ${item.title}`);

  } else if (item.type === 'shot') {
    // Upload images as blobs
    const blobs = [];
    for (const img of item.imageFiles!) {
      const buf = gitShowBinary(`src/content/shots/${item.shotDir}/${img}`);
      const ext = extname(img).toLowerCase();
      const mime = MIME[ext] || 'application/octet-stream';
      const { data } = await agent.uploadBlob(buf, { encoding: mime });
      blobs.push(data.blob);
      console.log(`  blob: ${img} (${(buf.length / 1024).toFixed(0)}KB)`);
    }

    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.shot',
      record: {
        $type: 'rip.nate.shot',
        fragmentId,
        title: item.title,
        content: item.content || undefined,
        images: blobs,
        createdAt,
      },
    });
    console.log(`[${fragmentId}] shot: ${item.title} (${blobs.length} images)`);
  }

  // Small delay to avoid rate limits
  await new Promise(r => setTimeout(r, 100));
}

console.log('\nDone.');
