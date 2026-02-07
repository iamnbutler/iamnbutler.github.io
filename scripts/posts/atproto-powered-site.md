# Powering a static site with AT Protocol

This site doesn't have a database or a CMS. Every piece of content — posts, shots, lists, links — lives on the AT Protocol as records on a Personal Data Server. The site is static Astro that fetches everything at build time, renders it, and deploys to GitHub Pages.

## Custom lexicons

AT Protocol uses [lexicons](https://atproto.com/guides/lexicons) to define record schemas. Bluesky's social features are all lexicons (`app.bsky.feed.post`, `app.bsky.actor.profile`, etc.), but anyone can define their own. This site uses four:

- `rip.nate.post` — long-form writing with markdown content
- `rip.nate.shot` — images with blob references
- `rip.nate.list` — curated lists
- `rip.nate.link` — bookmarks with URLs and annotations

Each record has a `fragmentId` — a global sequential number that gives every piece of content a stable ID regardless of type. A post might be #12, the next shot #13, a link #14.

The lexicon definitions are straightforward JSON schemas:

```json
{
  "lexicon": 1,
  "id": "rip.nate.post",
  "defs": {
    "main": {
      "type": "record",
      "key": "tid",
      "record": {
        "type": "object",
        "required": ["fragmentId", "title", "content", "createdAt"],
        "properties": {
          "fragmentId": { "type": "integer", "minimum": 1 },
          "title": { "type": "string", "maxLength": 300 },
          "content": { "type": "string", "maxLength": 500000 },
          "createdAt": { "type": "string", "format": "datetime" },
          "images": {
            "type": "array",
            "maxLength": 20,
            "items": { "type": "blob", "accept": ["image/png", "image/jpeg", "image/gif", "image/webp"] }
          }
        }
      }
    }
  }
}
```

## Blob storage for images

Images aren't URLs to some external CDN — they're blobs stored directly on the PDS. When uploading a shot or a post with screenshots, the flow is:

1. Read the image file
2. `agent.uploadBlob(buffer, { encoding: 'image/png' })` — PDS stores the binary and returns a blob ref with a CID (content identifier)
3. Store the blob ref in the record's `images` array
4. At render time, construct the URL: `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`

The CID is a content-addressed hash — the same image always produces the same CID, and anyone can verify the blob hasn't been tampered with. The PDS serves blobs over a standard XRPC endpoint, so they work as regular image URLs in HTML.

For posts with inline images, the upload script scans the markdown for local image references like `![alt](path/to/screenshot.png)`, uploads each one as a blob, and rewrites the path to the blob URL before saving the content. The markdown renderer just sees a normal image URL.

## Fetching at build time

The Astro site fetches all records from the PDS using `com.atproto.repo.listRecords`:

```typescript
async function listRecords(collection: string): Promise<any[]> {
  const records: any[] = [];
  let cursor: string | undefined;
  do {
    const params = new URLSearchParams({ repo: DID, collection, limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const res = await fetch(`${PDS}/xrpc/com.atproto.repo.listRecords?${params}`);
    const data = await res.json();
    records.push(...(data.records ?? []));
    cursor = data.cursor;
  } while (cursor);
  return records;
}
```

This runs once per build against the PDS directly (not the public API — `listRecords` requires hitting the PDS). All four collections are fetched in parallel, mapped into a unified `Fragment` type, sorted by date, and fed into Astro's static page generation.

One important lesson: the public Bluesky AppView (`public.api.bsky.app`) supports `resolveHandle` but does **not** support `listRecords` for custom collections. You have to hit the PDS directly. For this account that's `morel.us-east.host.bsky.network`.

## Why this works

The appeal is ownership and portability. The content isn't locked in a database behind an API key — it's on a protocol. Anyone can read these records. If this PDS goes away, the records can move to another one. The DID (decentralized identifier) stays the same.

There's no auth needed to read. No rate limiting for reasonable usage. No API versioning to worry about. The PDS just serves records and blobs over HTTP.

The tradeoff is that builds are slower than reading from a local file system, and you're dependent on PDS uptime during builds. But for a personal site that rebuilds on push, it's fine. And the content survives independently of any particular hosting or deployment setup.

Uploading new content is a script that authenticates, creates a record, and optionally uploads blobs. No dashboard, no web UI — just `npx tsx scripts/upload-post.ts post.md 62`. The content goes straight to the PDS and shows up on the next build.
