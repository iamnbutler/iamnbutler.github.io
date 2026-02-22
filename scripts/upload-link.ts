/**
 * Upload a link fragment to atproto PDS.
 * Usage: env $(cat .env | xargs) npx tsx scripts/upload-link.ts <url> <fragmentId> [title] [comment]
 *
 * If no title given, fetches the page title from the URL.
 */
import { AtpAgent } from '@atproto/api';
import { stripMarkdown, markdownContent } from './lib/markdown.js';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const PUBLICATION_URI = `at://${DID}/site.standard.publication/self`;

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

const record: Record<string, any> = {
  $type: 'site.standard.document',
  site: PUBLICATION_URI,
  path: `/f/${fragmentId}`,
  title,
  publishedAt: new Date().toISOString(),
  fragmentId,
  fragmentType: 'link',
  externalUrl: url,
};

// Add comment as both content (markdown) and textContent (plaintext)
if (comment) {
  record.content = markdownContent(comment);
  record.textContent = stripMarkdown(comment);
}

await agent.com.atproto.repo.createRecord({
  repo: agent.session!.did,
  collection: 'site.standard.document',
  record,
});

console.log(`[${fragmentId}] link: ${title}`);
console.log(`  url: ${url}`);
if (comment) console.log(`  comment: ${comment}`);
