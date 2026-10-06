import type { Fragment, FragmentType, BskyPost } from './types';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const PDS = 'https://morel.us-east.host.bsky.network';
const PUBLIC_API = 'https://public.api.bsky.app';

const PUBLICATION_RKEY = 'self';
const PUBLICATION_URI = `at://${DID}/site.standard.publication/${PUBLICATION_RKEY}`;
const COLLECTION_DOCUMENT = 'site.standard.document';

/** Fetch complete collections or fail; never deploy a partial content snapshot. */
export async function listRecords(collection: string, request: typeof fetch = fetch): Promise<any[]> {
  const records: any[] = [];
  let cursor: string | undefined;
  const seen = new Set<string>();
  do {
    const params = new URLSearchParams({ repo: DID, collection, limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const res = await request(`${PDS}/xrpc/com.atproto.repo.listRecords?${params}`, {
      signal: AbortSignal.timeout(30_000),
    });
    if (!res.ok) throw new Error(`Cannot load ${collection}: HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.records) || (data.cursor !== undefined && typeof data.cursor !== 'string')) {
      throw new Error(`Invalid listing response for ${collection}`);
    }
    records.push(...data.records);
    cursor = data.cursor;
    if (cursor) {
      if (seen.has(cursor)) throw new Error(`Repeated pagination cursor for ${collection}`);
      seen.add(cursor);
    }
  } while (cursor);
  return records;
}

function mapRecord(r: any): Fragment {
  const v = r.value;
  const type: FragmentType = v.fragmentType || 'post';

  // Extract markdown from content union (structured) or fall back to textContent
  // content is { $type: "rip.nate.content.markdown", text: "..." }
  const markdown = v.content?.text ?? v.textContent;

  return {
    id: v.fragmentId,
    type,
    rkey: r.uri.split('/').pop()!,
    atUri: r.uri,
    title: v.title || '',
    content: markdown,
    url: v.externalUrl,
    images: v.images?.map((img: any) => ({
      cid: img.ref?.$link || img.ref,
      mimeType: img.mimeType,
      alt: img.alt,
    })),
    createdAt: v.publishedAt,
  };
}

/** Validate URL identity before generating any routes. */
export function fragmentsFromRecords(records: any[]): Fragment[] {
  const fragments: Fragment[] = [];
  const ids = new Map<number, string>();
  const errors: string[] = [];
  for (const record of records) {
    const value = record?.value;
    if (!value || typeof value !== 'object' || typeof record.uri !== 'string') {
      errors.push('Malformed document record');
      continue;
    }
    // Ignore documents belonging to other publications, not malformed site documents.
    if (value.site !== PUBLICATION_URI && value.fragmentId === undefined) continue;
    if (value.site && value.site !== PUBLICATION_URI) continue;
    const errorCount = errors.length;
    const label = `${JSON.stringify(value.title)} (${record.uri})`;
    if (!Number.isSafeInteger(value.fragmentId) || value.fragmentId <= 0) {
      errors.push(`Invalid fragmentId: ${label}`);
      continue;
    }
    if (ids.has(value.fragmentId)) {
      errors.push(`Duplicate /f/${value.fragmentId}: ${ids.get(value.fragmentId)} and ${label}`);
    }
    ids.set(value.fragmentId, label);
    if (value.path !== `/f/${value.fragmentId}`) errors.push(`Invalid path for ${label}: expected /f/${value.fragmentId}`);
    if (!['post', 'shot', 'list', 'link'].includes(value.fragmentType ?? 'post')) errors.push(`Invalid fragment type: ${label}`);
    if (typeof value.title !== 'string' || !value.title.trim()) errors.push(`Missing title: ${label}`);
    if (typeof value.publishedAt !== 'string' || !Number.isFinite(Date.parse(value.publishedAt))) errors.push(`Invalid publication date: ${label}`);
    if (value.content?.text !== undefined && typeof value.content.text !== 'string') errors.push(`Invalid markdown: ${label}`);
    if (value.textContent !== undefined && typeof value.textContent !== 'string') errors.push(`Invalid text content: ${label}`);
    if (value.fragmentType === 'link') {
      try {
        if (!['http:', 'https:'].includes(new URL(value.externalUrl).protocol)) throw new Error();
      } catch { errors.push(`Invalid link URL: ${label}`); }
    }
    if (value.images !== undefined && (!Array.isArray(value.images) || value.images.some((img: any) =>
      !img || typeof (img.ref?.$link ?? img.ref) !== 'string' || typeof img.mimeType !== 'string'
    ))) errors.push(`Invalid images: ${label}`);
    // Don't map records that have already failed validation.
    if (errors.length === errorCount) fragments.push(mapRecord(record));
  }
  if (errors.length) throw new Error(`Content validation failed:\n${errors.join('\n')}`);
  if (!fragments.length) throw new Error('No site fragments found; refusing an empty content build');
  return fragments.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
}

export async function fetchAllFragments(): Promise<Fragment[]> {
  return fragmentsFromRecords(await listRecords(COLLECTION_DOCUMENT));
}

export async function fetchFragment(id: number): Promise<Fragment | null> {
  const all = await fetchAllFragments();
  return all.find(f => f.id === id) ?? null;
}

export function blobUrl(did: string, cid: string): string {
  return `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
}

// === Bluesky public API ===

function mapBskyPost(post: any): BskyPost {
  const embedType = post.embed?.$type;

  const images = embedType === 'app.bsky.embed.images#view'
    ? post.embed.images.map((img: any) => ({
        thumb: img.thumb,
        fullsize: img.fullsize,
        alt: img.alt || '',
        aspectRatio: img.aspectRatio,
      }))
    : undefined;

  const video = embedType === 'app.bsky.embed.video#view'
    ? {
        playlist: post.embed.playlist,
        thumbnail: post.embed.thumbnail,
        aspectRatio: post.embed.aspectRatio,
      }
    : undefined;

  const externalEmbed = embedType === 'app.bsky.embed.external#view'
    ? {
        uri: post.embed.external.uri,
        title: post.embed.external.title || '',
        description: post.embed.external.description || '',
        thumb: post.embed.external.thumb,
      }
    : undefined;

  // Best available thumbnail: images > video thumbnail > external thumb
  const mediaThumb = images?.[0]?.fullsize
    ?? video?.thumbnail
    ?? externalEmbed?.thumb
    ?? undefined;

  return {
    uri: post.uri,
    rkey: post.uri.split('/').pop()!,
    text: post.record.text,
    createdAt: post.record.createdAt,
    author: {
      handle: post.author.handle,
      displayName: post.author.displayName || post.author.handle,
      avatar: post.author.avatar,
    },
    images,
    video,
    externalEmbed,
    likeCount: post.likeCount ?? 0,
    replyCount: post.replyCount ?? 0,
    repostCount: post.repostCount ?? 0,
    hasMedia: !!(images?.length || video || externalEmbed?.thumb),
    mediaThumb,
  };
}

/** Fetch a single bsky post by rkey */
export async function fetchBskyPost(rkey: string): Promise<BskyPost | null> {
  const uri = `at://${DID}/app.bsky.feed.post/${rkey}`;
  const params = new URLSearchParams({ uri, depth: '0', parentHeight: '0' });
  const res = await fetch(`${PUBLIC_API}/xrpc/app.bsky.feed.getPostThread?${params}`);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.thread?.post) return null;
  return mapBskyPost(data.thread.post);
}

/** Fetch multiple bsky posts by rkeys, in parallel */
export async function fetchBskyPosts(rkeys: string[]): Promise<BskyPost[]> {
  const results = await Promise.all(rkeys.map(rk => fetchBskyPost(rk)));
  return results.filter((p): p is BskyPost => p !== null);
}

/** Fetch author feed from public API, excluding specific rkeys */
export async function fetchBskyFeed(limit: number = 20, excludeRkeys: Set<string> = new Set()): Promise<BskyPost[]> {
  const params = new URLSearchParams({ actor: DID, limit: String(limit), filter: 'posts_no_replies' });
  const res = await fetch(`${PUBLIC_API}/xrpc/app.bsky.feed.getAuthorFeed?${params}`);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.feed ?? [])
    .map((item: any) => {
      const p = mapBskyPost(item.post);
      p.isRepost = item.reason?.$type === 'app.bsky.feed.defs#reasonRepost';
      return p;
    })
    .filter((p: BskyPost) => !excludeRkeys.has(p.rkey));
}

/** Parse a bsky.app URL into a rkey */
export function parseBskyUrl(url: string): string | null {
  const m = url.match(/\/post\/([a-z0-9]+)$/i);
  return m ? m[1] : null;
}

export { DID };
