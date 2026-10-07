import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { Root, RootContent, Image } from 'mdast';

export const REQUEST_TIMEOUT_MS = 30_000;
const COLLECTION = 'site.standard.document';

export function parseFragmentId(value: string): number {
  if (!/^[0-9]+$/.test(value)) throw new Error('fragmentId must be a positive safe integer');
  const id = Number(value);
  if (!Number.isSafeInteger(id) || id <= 0) throw new Error('fragmentId must be a positive safe integer');
  return id;
}

export function validateLinkUrl(value: string): string {
  let url: URL;
  try { url = new URL(value); } catch { throw new Error('Link URL must be a valid HTTP(S) URL'); }
  if (!/^https?:\/\//i.test(value) || !/^https?:$/.test(url.protocol) || !url.hostname) {
    throw new Error('Link URL must be a valid HTTP(S) URL');
  }
  return value;
}

export function parsePublishedAt(value: string): string {
  const date = new Date(value);
  // Date accepts overflowing calendar days (e.g. February 30); reject those too.
  const parts = /^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(value);
  if (parts) {
    const [, year, month, day] = parts;
    const calendar = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    if (!Number.isFinite(calendar.getTime()) || calendar.toISOString().slice(0, 10) !== `${year}-${month}-${day}`) {
      throw new Error('Invalid --date');
    }
  }
  if (!value.trim() || !Number.isFinite(date.getTime())) throw new Error('Invalid --date');
  return date.toISOString();
}

export function parsePublishingArgs(rawArgs: string[]) {
  const args: string[] = [];
  let dryRun = false;
  let publishedAt: string | undefined;
  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--date' || arg.startsWith('--date=')) {
      const value = arg === '--date' ? rawArgs[++i] : arg.slice('--date='.length);
      if (value === undefined || value.startsWith('--')) throw new Error('--date requires a value');
      if (publishedAt !== undefined) throw new Error('--date may only be supplied once');
      publishedAt = parsePublishedAt(value);
    } else {
      args.push(arg);
    }
  }
  return { args, dryRun, publishedAt };
}

const MIME: Record<string, string> = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp',
};

export function collectPostImages(
  markdown: string,
  directory: string,
  readImage: (path: string) => Uint8Array = path => readFileSync(path),
) {
  const nodes: Image[] = [];
  function collect(node: Root | RootContent): void {
    if (node.type === 'image') nodes.push(node);
    if ('children' in node) node.children.forEach(collect);
  }
  collect(unified().use(remarkParse).parse(markdown));
  const images = [];
  for (const node of nodes) {
    const path = node.url;
    if (/^https?:\/\//i.test(path)) continue;
    const absPath = resolve(directory, path);
    const mime = MIME[extname(absPath).toLowerCase()];
    if (!mime) throw new Error(`Unsupported image type: ${path}`);
    let bytes: Uint8Array;
    try { bytes = readImage(absPath); } catch (cause) {
      throw new Error(`Cannot read local image: ${path} (resolved to ${absPath})`, { cause });
    }
    const start = node.position!.start.offset!;
    const end = node.position!.end.offset!;
    images.push({ match: markdown.slice(start, end), alt: node.alt ?? '', title: node.title, start, end, path, absPath, mime, bytes });
  }
  return images;
}

/** Replace exact parsed image spans, never identical text inside code examples. */
export function rewritePostImages(markdown: string, images: ReturnType<typeof collectPostImages>, urls: string[]): string {
  if (images.length !== urls.length) throw new Error('Every local image needs an uploaded URL');
  for (let i = images.length - 1; i >= 0; i--) {
    const image = images[i];
    const alt = image.alt.replace(/([\\\[\]])/g, '\\$1');
    const title = image.title ? ` ${JSON.stringify(image.title)}` : '';
    markdown = markdown.slice(0, image.start) + `![${alt}](${urls[i]}${title})` + markdown.slice(image.end);
  }
  return markdown;
}

/** Bound all publisher HTTP calls, including login, title fetching and writes. */
export const publishingFetch: typeof globalThis.fetch = (input, init) => {
  const originalSignal = init?.signal ?? (input instanceof Request ? input.signal : undefined);
  const timeout = AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  return globalThis.fetch(input, {
    ...init,
    signal: originalSignal ? AbortSignal.any([originalSignal, timeout]) : timeout,
  });
};

export type ListDocuments = (
  params: { repo: string; collection: string; limit: number; cursor?: string },
  options: { signal: AbortSignal },
) => Promise<{ data: { records: { value: unknown }[]; cursor?: string } }>;

/** Read-only, fail-closed check. It is not an atomic reservation of the ID. */
export async function preflightPublishing(options: {
  authenticatedDid: string | undefined;
  expectedDid: string;
  fragmentId: number;
  listRecords: ListDocuments;
  timeoutMs?: number;
}): Promise<void> {
  const { authenticatedDid, expectedDid, fragmentId, listRecords } = options;
  if (authenticatedDid !== expectedDid) throw new Error(`Authenticated DID does not match expected site DID ${expectedDid}`);
  parseFragmentId(String(fragmentId));
  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(new Error('Publishing preflight timed out'));
    }, options.timeoutMs ?? REQUEST_TIMEOUT_MS);
  });
  const scan = async () => {
    let cursor: string | undefined;
    const seen = new Set<string>();
    do {
      controller.signal.throwIfAborted();
      const response = await listRecords({ repo: expectedDid, collection: COLLECTION, limit: 100, cursor }, { signal: controller.signal });
      controller.signal.throwIfAborted();
      if (!response?.data || !Array.isArray(response.data.records)) throw new Error('Invalid document listing response');
      for (const record of response.data.records) {
        const value = record?.value;
        if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid document record');
        const document = value as Record<string, unknown>;
        if (document.fragmentId === fragmentId || document.fragmentId === String(fragmentId) || document.path === `/f/${fragmentId}`) {
          throw new Error(`Fragment collision: #${fragmentId} or /f/${fragmentId} already exists`);
        }
      }
      cursor = response.data.cursor;
      if (cursor !== undefined && typeof cursor !== 'string') throw new Error('Invalid document listing cursor');
      if (cursor) {
        if (seen.has(cursor)) throw new Error('Repeated document listing cursor');
        seen.add(cursor);
      }
    } while (cursor);
  };
  try { await Promise.race([scan(), timeout]); } finally { clearTimeout(timer); }
}
