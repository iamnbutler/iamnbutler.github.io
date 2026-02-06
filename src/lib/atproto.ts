const PUBLIC_API = 'https://public.api.bsky.app';
const HANDLE = 'nate.rip';

const COLLECTION_POST = 'rip.nate.blog.post';
const COLLECTION_SHOT = 'rip.nate.shot';

export interface BlogPost {
  rkey: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Shot {
  rkey: string;
  title: string;
  slug: string;
  date: string;
  images: { cid: string; mimeType: string; alt?: string }[];
  tags: string[];
}

async function listRecords(collection: string): Promise<any[]> {
  const records: any[] = [];
  let cursor: string | undefined;
  do {
    const params = new URLSearchParams({ repo: HANDLE, collection, limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const res = await fetch(`${PUBLIC_API}/xrpc/com.atproto.repo.listRecords?${params}`);
    if (!res.ok) throw new Error(`listRecords failed: ${res.status}`);
    const data = await res.json();
    records.push(...data.records);
    cursor = data.cursor;
  } while (cursor);
  return records;
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const records = await listRecords(COLLECTION_POST);
  return records.map((r: any) => ({
    rkey: r.uri.split('/').pop()!,
    title: r.value.title,
    slug: r.value.slug,
    description: r.value.description || '',
    content: r.value.content,
    date: r.value.createdAt,
    tags: r.value.tags || []
  })).sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function fetchPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchPosts();
  return posts.find(p => p.slug === slug) || null;
}

export async function fetchShots(): Promise<Shot[]> {
  const records = await listRecords(COLLECTION_SHOT);
  return records.map((r: any) => ({
    rkey: r.uri.split('/').pop()!,
    title: r.value.title || '',
    slug: r.value.slug,
    date: r.value.createdAt,
    images: r.value.images || [],
    tags: r.value.tags || []
  })).sort((a: Shot, b: Shot) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function fetchShot(slug: string): Promise<Shot | null> {
  const shots = await fetchShots();
  return shots.find(s => s.slug === slug) || null;
}

export function blobUrl(did: string, cid: string): string {
  return `${PUBLIC_API}/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
}

let _did: string | null = null;
export async function resolveDid(): Promise<string> {
  if (_did) return _did;
  const res = await fetch(`${PUBLIC_API}/xrpc/com.atproto.identity.resolveHandle?handle=${HANDLE}`);
  if (!res.ok) throw new Error(`resolveHandle failed: ${res.status}`);
  const data = await res.json();
  _did = data.did;
  return _did!;
}
