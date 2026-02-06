/**
 * Delete a single post record from PDS by rkey.
 * Usage: ATP_PASSWORD=... npx tsx scripts/delete-post.ts <rkey>
 */
import { AtpAgent } from '@atproto/api';

const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const rkey = process.argv[2];
if (!rkey) { console.error('Usage: npx tsx scripts/delete-post.ts <rkey>'); process.exit(1); }

async function main() {
  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier: process.env.ATP_HANDLE || 'nate.rip', password: PASSWORD });
  await agent.com.atproto.repo.deleteRecord({
    repo: agent.session!.did,
    collection: 'rip.nate.post',
    rkey,
  });
  console.log(`Deleted rkey ${rkey}`);
}

main().catch(e => { console.error(e); process.exit(1); });
