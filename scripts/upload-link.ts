/**
 * Upload a link fragment to atproto PDS.
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload-link.ts <url> <fragmentId> [title] [comment] [--date ISO] [--dry-run]
 *
 * If no title given, fetches the page title from the URL.
 */
import { AtpAgent } from '@atproto/api';
import { stripMarkdown, markdownContent } from './lib/markdown.js';
import { parseFragmentId, parsePublishingArgs, preflightPublishing, publishingFetch, validateLinkUrl } from './lib/publishing.js';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
const PUBLICATION_URI = `at://${DID}/site.standard.publication/self`;

const { args, dryRun: DRY_RUN, publishedAt } = parsePublishingArgs(process.argv.slice(2));
const [url, idStr, titleArg, comment] = args;
if (!url || !idStr) {
  console.error('Usage: upload-link.ts <url> <fragmentId> [title] [comment] [--date ISO] [--dry-run]');
  process.exit(1);
}
const fragmentId = parseFragmentId(idStr);
validateLinkUrl(url);
if (!PASSWORD && !DRY_RUN) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

// Resolve title: use arg, or fetch from page
let title = titleArg;
if (!title) {
  try {
    const res = await publishingFetch(url);
    const html = await res.text();
    const m = html.match(/<title[^>]*>([^<]+)/i);
    title = m ? m[1].trim() : new URL(url).hostname;
    console.log(`Fetched title: "${title}"`);
  } catch {
    title = new URL(url).hostname;
    console.log(`Could not fetch title, using domain: "${title}"`);
  }
}

const record: Record<string, any> = {
  $type: 'site.standard.document',
  site: PUBLICATION_URI,
  path: `/f/${fragmentId}`,
  title,
  publishedAt: publishedAt ?? new Date().toISOString(),
  fragmentId,
  fragmentType: 'link',
  externalUrl: url,
};

// Add comment as both content (markdown) and textContent (plaintext)
if (comment) {
  record.content = markdownContent(comment);
  record.textContent = stripMarkdown(comment);
}

if (DRY_RUN) {
  console.log(JSON.stringify(record, null, 2));
  console.log('\n--dry-run: not uploading');
  process.exit(0);
}

const agent = new AtpAgent({ service: 'https://bsky.social', fetch: publishingFetch });
await agent.login({ identifier: HANDLE, password: PASSWORD! });
await preflightPublishing({
  authenticatedDid: agent.session?.did,
  expectedDid: DID,
  fragmentId,
  listRecords: (params, options) => agent.com.atproto.repo.listRecords(params, options),
});

await agent.com.atproto.repo.createRecord({
  repo: agent.session!.did,
  collection: 'site.standard.document',
  record,
});

console.log(`[${fragmentId}] link: ${title}`);
console.log(`  url: ${url}`);
if (comment) console.log(`  comment: ${comment}`);
