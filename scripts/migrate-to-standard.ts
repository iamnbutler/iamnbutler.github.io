/**
 * Migrate existing rip.nate.* records to site.standard.document format.
 * Usage: ATP_PASSWORD=... npx tsx scripts/migrate-to-standard.ts [--dry-run] [--delete-old]
 *
 * This script:
 * 1. Reads all existing rip.nate.{post,shot,list,link} records
 * 2. Creates corresponding site.standard.document records
 * 3. Optionally deletes old records (--delete-old)
 */
import { AtpAgent } from '@atproto/api';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;

const DRY_RUN = process.argv.includes('--dry-run');
const DELETE_OLD = process.argv.includes('--delete-old');

if (!PASSWORD && !DRY_RUN) {
  console.error('Set ATP_PASSWORD env var');
  process.exit(1);
}

const PUBLICATION_URI = `at://${DID}/site.standard.publication/self`;
const PDS = 'https://morel.us-east.host.bsky.network';

const OLD_COLLECTIONS = [
  'rip.nate.post',
  'rip.nate.shot',
  'rip.nate.list',
  'rip.nate.link',
] as const;

type OldCollection = typeof OLD_COLLECTIONS[number];

const TYPE_MAP: Record<OldCollection, string> = {
  'rip.nate.post': 'post',
  'rip.nate.shot': 'shot',
  'rip.nate.list': 'list',
  'rip.nate.link': 'link',
};

async function listRecords(collection: string): Promise<any[]> {
  const records: any[] = [];
  let cursor: string | undefined;
  do {
    const params = new URLSearchParams({ repo: DID, collection, limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const res = await fetch(`${PDS}/xrpc/com.atproto.repo.listRecords?${params}`);
    if (!res.ok) {
      console.error(`Failed to fetch ${collection}: ${res.status}`);
      return [];
    }
    const data = await res.json();
    records.push(...(data.records ?? []));
    cursor = data.cursor;
  } while (cursor);
  return records;
}

function convertRecord(r: any, collection: OldCollection): Record<string, any> {
  const v = r.value;
  const fragmentType = TYPE_MAP[collection];
  const rkey = r.uri.split('/').pop()!;

  const doc: Record<string, any> = {
    $type: 'site.standard.document',
    site: PUBLICATION_URI,
    path: `/f/${v.fragmentId}`,
    title: v.title || 'Untitled',
    publishedAt: v.createdAt,
    fragmentId: v.fragmentId,
    fragmentType,
  };

  // Content field mapping
  if (collection === 'rip.nate.link') {
    doc.textContent = v.comment || undefined;
    doc.externalUrl = v.url;
  } else {
    doc.textContent = v.content || undefined;
  }

  // Images
  if (v.images && v.images.length > 0) {
    doc.images = v.images;
    doc.coverImage = v.images[0];
  }

  return doc;
}

async function main() {
  console.log('=== Migrate to Standard.site ===\n');
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}${DELETE_OLD ? ' + DELETE OLD' : ''}\n`);

  // Fetch all old records
  const allOldRecords: { collection: OldCollection; record: any }[] = [];

  for (const collection of OLD_COLLECTIONS) {
    const records = await listRecords(collection);
    console.log(`Found ${records.length} ${collection} records`);
    for (const record of records) {
      allOldRecords.push({ collection, record });
    }
  }

  console.log(`\nTotal: ${allOldRecords.length} records to migrate\n`);

  if (allOldRecords.length === 0) {
    console.log('Nothing to migrate.');
    return;
  }

  // Sort by fragmentId
  allOldRecords.sort((a, b) => (a.record.value.fragmentId || 0) - (b.record.value.fragmentId || 0));

  // Preview
  console.log('Records to migrate:');
  for (const { collection, record } of allOldRecords) {
    const v = record.value;
    const rkey = record.uri.split('/').pop();
    console.log(`  #${String(v.fragmentId).padStart(2)} ${TYPE_MAP[collection].padEnd(4)} ${rkey} "${v.title || v.url || '(untitled)'}"`);
  }

  if (DRY_RUN) {
    console.log('\n--dry-run: not uploading');
    return;
  }

  // Login and migrate
  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier: HANDLE, password: PASSWORD! });
  console.log(`\nLogged in as ${HANDLE}\n`);

  const created: string[] = [];
  const errors: string[] = [];

  for (const { collection, record } of allOldRecords) {
    const v = record.value;
    const oldRkey = record.uri.split('/').pop()!;

    try {
      const newDoc = convertRecord(record, collection);

      const res = await agent.com.atproto.repo.createRecord({
        repo: agent.session!.did,
        collection: 'site.standard.document',
        record: newDoc,
      });

      const newRkey = res.data.uri.split('/').pop();
      console.log(`✓ #${v.fragmentId} ${TYPE_MAP[collection]} → ${newRkey}`);
      created.push(record.uri);

      // Small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 100));
    } catch (e: any) {
      console.error(`✗ #${v.fragmentId} ${TYPE_MAP[collection]}: ${e.message}`);
      errors.push(record.uri);
    }
  }

  console.log(`\nMigrated: ${created.length}/${allOldRecords.length}`);
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
  }

  // Delete old records if requested
  if (DELETE_OLD && created.length > 0) {
    console.log('\nDeleting old records...');
    for (const { collection, record } of allOldRecords) {
      if (!created.includes(record.uri)) continue;

      const rkey = record.uri.split('/').pop()!;
      try {
        await agent.com.atproto.repo.deleteRecord({
          repo: agent.session!.did,
          collection,
          rkey,
        });
        console.log(`  deleted ${collection}/${rkey}`);
        await new Promise(r => setTimeout(r, 50));
      } catch (e: any) {
        console.error(`  failed to delete ${collection}/${rkey}: ${e.message}`);
      }
    }
  }

  console.log('\nDone.');
}

main().catch(e => { console.error(e); process.exit(1); });
