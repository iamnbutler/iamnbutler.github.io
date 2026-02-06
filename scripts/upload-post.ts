/**
 * Upload a single post to atproto PDS.
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload-post.ts <markdown-file> <fragmentId> [title]
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync } from 'fs';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const [,, file, idStr, titleOverride] = process.argv;
if (!file || !idStr) {
  console.error('Usage: npx tsx scripts/upload-post.ts <file.md> <fragmentId> [title]');
  process.exit(1);
}

const fragmentId = parseInt(idStr, 10);
const content = readFileSync(file, 'utf-8');
const title = titleOverride || content.split('\n')[0].replace(/^#\s*/, '').trim() || 'Untitled';

async function main() {
  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier: HANDLE, password: PASSWORD });

  const record = {
    $type: 'rip.nate.post',
    fragmentId,
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  const res = await agent.com.atproto.repo.createRecord({
    repo: agent.session!.did,
    collection: 'rip.nate.post',
    record,
  });

  console.log(`Uploaded: #${fragmentId} "${title}" → ${res.data.uri}`);
}

main().catch(e => { console.error(e); process.exit(1); });
