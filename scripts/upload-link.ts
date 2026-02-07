/**
 * Upload a link fragment to atproto PDS.
 * Usage: env $(cat .env | xargs) npx tsx scripts/upload-link.ts <url> <fragmentId> [title] [comment]
 *
 * If no title given, fetches the page title from the URL.
 */
import { AtpAgent } from '@atproto/api';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const [,, url, idStr, titleArg, comment] = process.argv;
if (!url || !idStr) {
  console.error('Usage: upload-link.ts <url> <fragmentId> [title] [comment]');
  process.exit(1);
}
const fragmentId = parseInt(idStr, 10);

// Resolve title: use arg, or fetch from page
let title = titleArg;
if (!title) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const m = html.match(/<title[^>]*>([^<]+)/i);
    title = m ? m[1].trim() : new URL(url).hostname;
    console.log(`Fetched title: "${title}"`);
  } catch {
    title = new URL(url).hostname;
    console.log(`Could not fetch title, using domain: "${title}"`);
  }
}

const agent = new AtpAgent({ service: 'https://bsky.social' });
await agent.login({ identifier: HANDLE, password: PASSWORD });

await agent.com.atproto.repo.createRecord({
  repo: agent.session!.did,
  collection: 'rip.nate.link',
  record: {
    $type: 'rip.nate.link',
    fragmentId,
    url,
    title,
    comment: comment || undefined,
    createdAt: new Date().toISOString(),
  },
});

console.log(`[${fragmentId}] link: ${title}`);
console.log(`  url: ${url}`);
if (comment) console.log(`  comment: ${comment}`);
