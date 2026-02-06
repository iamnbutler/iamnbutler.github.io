/**
 * Upload blog posts and shots to atproto PDS.
 * Usage: npx tsx scripts/upload.ts
 * Requires ATP_HANDLE and ATP_PASSWORD env vars (app password).
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import matter from 'gray-matter';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const agent = new AtpAgent({ service: 'https://bsky.social' });

async function login() {
  await agent.login({ identifier: HANDLE, password: PASSWORD });
  console.log(`Logged in as ${HANDLE}`);
}

async function uploadBlob(filePath: string) {
  const data = readFileSync(filePath);
  const ext = extname(filePath).toLowerCase();
  const mimeTypes: Record<string, string> = {
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml'
  };
  const mimeType = mimeTypes[ext] || 'application/octet-stream';
  const res = await agent.uploadBlob(data, { encoding: mimeType });
  return { ref: res.data.blob, mimeType, size: data.length };
}

async function uploadPosts() {
  const postsDir = join(process.cwd(), 'migrate', 'blog');
  if (!existsSync(postsDir)) { console.log('No migrate/blog directory, skipping posts'); return; }

  for (const file of readdirSync(postsDir)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(postsDir, file), 'utf-8');
    const { data: fm, content } = matter(raw);
    const slug = file.replace('.md', '');
    const date = new Date(fm.date).toISOString();

    console.log(`Uploading post: ${fm.title} (${slug})`);
    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.blog.post',
      record: {
        $type: 'rip.nate.blog.post',
        title: fm.title,
        slug,
        description: fm.description || '',
        content,
        tags: fm.tags || [],
        createdAt: date
      }
    });
  }
}

async function uploadShots() {
  const shotsDir = join(process.cwd(), 'migrate', 'shots');
  if (!existsSync(shotsDir)) { console.log('No migrate/shots directory, skipping shots'); return; }

  for (const dir of readdirSync(shotsDir)) {
    const shotDir = join(shotsDir, dir);
    const mdPath = join(shotDir, 'index.md');
    if (!existsSync(mdPath)) continue;
    const raw = readFileSync(mdPath, 'utf-8');
    const { data: fm } = matter(raw);
    const slug = dir;
    const date = new Date(fm.date).toISOString();

    const files = readdirSync(shotDir);
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg|gif|webp)$/i.test(f));

    const images = [];
    for (const img of imageFiles) {
      console.log(`  Uploading blob: ${img}`);
      const blob = await uploadBlob(join(shotDir, img));
      images.push({ image: blob.ref, alt: img.replace(/\.[^.]+$/, '') });
    }

    console.log(`Uploading shot: ${fm.title || slug} (${images.length} images)`);
    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.shot',
      record: {
        $type: 'rip.nate.shot',
        title: fm.title || '',
        slug,
        images,
        tags: fm.tags || [],
        createdAt: date
      }
    });
  }
}

async function main() {
  await login();
  await uploadPosts();
  await uploadShots();
  console.log('Done.');
}

main().catch(console.error);
