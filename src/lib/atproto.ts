import type { Fragment, FragmentType } from './types';

const HANDLE = 'nate.rip';
const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const PDS = 'https://morel.us-east.host.bsky.network';

const COLLECTION_POST = 'rip.nate.post';
const COLLECTION_SHOT = 'rip.nate.shot';
const COLLECTION_LIST = 'rip.nate.list';

async function listRecords(collection: string): Promise<any[]> {
  const records: any[] = [];
  let cursor: string | undefined;
  do {
    const params = new URLSearchParams({ repo: DID, collection, limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const res = await fetch(`${PDS}/xrpc/com.atproto.repo.listRecords?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    records.push(...(data.records ?? []));
    cursor = data.cursor;
  } while (cursor);
  return records;
}

function mapRecord(r: any, type: FragmentType): Fragment {
  return {
    id: r.value.fragmentId,
    type,
    rkey: r.uri.split('/').pop()!,
    title: r.value.title || '',
    content: r.value.content,
    images: r.value.images?.map((img: any) => ({
      cid: img.ref?.$link || img.ref,
      mimeType: img.mimeType,
    })),
    createdAt: r.value.createdAt,
  };
}

export async function fetchAllFragments(): Promise<Fragment[]> {
  const [posts, shots, lists] = await Promise.all([
    listRecords(COLLECTION_POST),
    listRecords(COLLECTION_SHOT),
    listRecords(COLLECTION_LIST),
  ]);

  const fragments: Fragment[] = [
    ...posts.map((r: any) => mapRecord(r, 'post')),
    ...shots.map((r: any) => mapRecord(r, 'shot')),
    ...lists.map((r: any) => mapRecord(r, 'list')),
  ];

  return fragments.sort((a, b) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
}

export async function fetchFragment(id: number): Promise<Fragment | null> {
  const all = await fetchAllFragments();
  return all.find(f => f.id === id) ?? null;
}

export function blobUrl(did: string, cid: string): string {
  return `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
}

export { DID };
