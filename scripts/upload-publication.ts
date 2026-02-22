/**
 * Create the site.standard.publication record for nate.rip
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload-publication.ts
 */
import { AtpAgent } from '@atproto/api';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const RKEY = 'self'; // singleton publication record

async function main() {
  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier: HANDLE, password: PASSWORD });

  const record = {
    $type: 'site.standard.publication',
    url: 'https://nate.rip',
    name: 'nate.rip',
    description: 'Fragments of thought, photos, lists, and links.',
    preferences: {
      showInDiscover: true,
    },
  };

  const res = await agent.com.atproto.repo.putRecord({
    repo: agent.session!.did,
    collection: 'site.standard.publication',
    rkey: RKEY,
    record,
  });

  console.log('Publication created:');
  console.log(`  URI: ${res.data.uri}`);
  console.log(`  CID: ${res.data.cid}`);
  console.log(`\nVerification endpoint should return:`);
  console.log(`  at://${DID}/site.standard.publication/${RKEY}`);
}

main().catch(e => { console.error(e); process.exit(1); });
