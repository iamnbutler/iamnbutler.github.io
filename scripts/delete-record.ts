/**
 * Delete a record from the PDS.
 * Usage: ATP_PASSWORD=... npx tsx scripts/delete-record.ts <collection> <rkey>
 */
import { AtpAgent } from '@atproto/api';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const [,, collection, rkey] = process.argv;
if (!collection || !rkey) {
  console.error('Usage: npx tsx scripts/delete-record.ts <collection> <rkey>');
  process.exit(1);
}

async function main() {
  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier: HANDLE, password: PASSWORD as string });

  await agent.com.atproto.repo.deleteRecord({
    repo: agent.session!.did,
    collection,
    rkey,
  });

  console.log(`Deleted: ${collection}/${rkey}`);
}

main().catch(e => { console.error(e); process.exit(1); });
