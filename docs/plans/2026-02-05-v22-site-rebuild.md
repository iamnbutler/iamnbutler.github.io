# v22 Site Rebuild Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild nate.rip as a SvelteKit static site with atproto-hosted blog posts and shots, dark-only dense theme, and all existing content migrated forward.

**Architecture:** SvelteKit with adapter-static, mdsvex for markdown, Shiki for syntax highlighting. Blog posts and shots are atproto records with images as blobs — fetched at build time via public XRPC API. Local markdown for projects, lists, work. Single CSS file with custom properties. Deploy to GitHub Pages.

**Tech Stack:** SvelteKit 2, mdsvex, Shiki, @atproto/api, adapter-static, GitHub Actions

---

## Task 1: Scaffold SvelteKit project

**Files:**
- Create: `package.json`, `svelte.config.js`, `vite.config.ts`, `tsconfig.json`
- Create: `src/app.html`, `src/app.css`
- Create: `src/routes/+layout.svelte`
- Create: `static/CNAME`

**Step 1: Remove old project files**

Delete all existing source files (keep `.git/`, `docs/`). The old Astro project is being replaced entirely.

```bash
# Remove old project files but keep git and docs
ls | grep -v -E '^(\.git|docs)$' | xargs rm -rf
rm -f .eslintrc.cjs .prettierrc .prettierignore .npmrc .gitignore
```

**Step 2: Initialize SvelteKit project**

```bash
npm create svelte@latest . -- --template skeleton --types ts --no-eslint --no-prettier --no-playwright --no-vitest
```

If interactive prompts are unavoidable, manually create the skeleton:

```bash
npm init -y
npm install @sveltejs/kit @sveltejs/adapter-static svelte vite
npm install -D typescript @sveltejs/vite-plugin-svelte
```

**Step 3: Configure SvelteKit**

`svelte.config.js`:
```js
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
  themes: ['github-dark'],
  langs: ['typescript', 'javascript', 'rust', 'html', 'css', 'svelte', 'bash', 'json', 'markdown', 'diff']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang) => {
      const html = highlighter.codeToHtml(code, { lang: lang || 'text', theme: 'github-dark' });
      return `{@html \`${html.replace(/`/g, '\\`')}\`}`;
    }
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({ pages: 'build', assets: 'build', fallback: undefined, precompress: false, strict: true }),
    prerender: { entries: ['*'] }
  }
};

export default config;
```

`vite.config.ts`:
```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [sveltekit()] });
```

**Step 4: Create base HTML and layout**

`src/app.html`:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="data:," />
  %sveltekit.head%
</head>
<body>%sveltekit.body%</body>
</html>
```

`src/routes/+layout.svelte`:
```svelte
<script>
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Nate Butler</title>
</svelte:head>

{@render children()}
```

`static/CNAME`:
```
nate.rip
```

**Step 5: Create `.gitignore`**

```
node_modules
build
.svelte-kit
.spool
```

**Step 6: Install dependencies**

```bash
npm install mdsvex shiki
npm install -D @sveltejs/adapter-static
```

**Step 7: Verify build**

```bash
npx svelte-kit sync && npm run build
```

**Step 8: Commit**

```bash
git add -A && git commit -m "scaffold: sveltekit project with mdsvex and shiki"
```

---

## Task 2: CSS theme and base styles

**Files:**
- Create: `src/app.css`

**Step 1: Write the complete theme**

`src/app.css`:
```css
:root {
  --font: system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
  --fs: 13px;
  --fs-sm: 11px;
  --fs-lg: 18px;
  --lh: 1.5;
  --lh-tight: 1.3;

  --bg: #111;
  --bg-surface: #1a1a1a;
  --fg: #ccc;
  --fg-muted: #777;
  --fg-faint: #444;
  --accent: #8cf;
  --border: #282828;

  --sp-xs: 2px;
  --sp-sm: 4px;
  --sp: 8px;
  --sp-md: 12px;
  --sp-lg: 20px;
  --sp-xl: 32px;

  --max-w: 640px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  font-size: var(--fs);
  line-height: var(--lh);
  font-family: var(--font);
  color: var(--fg);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body { min-height: 100dvh; }

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

h1, h2, h3 { font-size: var(--fs-lg); line-height: var(--lh-tight); font-weight: 600; }
small { font-size: var(--fs-sm); color: var(--fg-muted); }

code, pre { font-family: var(--font-mono); font-size: var(--fs-sm); }
pre {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  padding: var(--sp);
  overflow-x: auto;
  border-radius: 3px;
}
code { background: var(--bg-surface); padding: 1px 4px; border-radius: 2px; }
pre code { background: none; padding: 0; }

img { max-width: 100%; height: auto; display: block; }
hr { border: none; border-top: 1px solid var(--border); margin: var(--sp-lg) 0; }

/* prose */
.prose { max-width: var(--max-w); }
.prose > * + * { margin-top: var(--sp-md); }
.prose h1, .prose h2, .prose h3 { margin-top: var(--sp-lg); }
.prose ul, .prose ol { padding-left: var(--sp-lg); }
.prose li + li { margin-top: var(--sp-xs); }
.prose blockquote {
  border-left: 2px solid var(--border);
  padding-left: var(--sp);
  color: var(--fg-muted);
}

/* layout */
.container { max-width: var(--max-w); margin: 0 auto; padding: var(--sp-lg) var(--sp); }
```

**Step 2: Verify the site renders with styles**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add src/app.css && git commit -m "style: dark theme with css variables"
```

---

## Task 3: AT Proto client library

**Files:**
- Create: `src/lib/atproto.ts`

**Step 1: Install @atproto/api**

```bash
npm install @atproto/api
```

**Step 2: Write the atproto client**

`src/lib/atproto.ts`:
```ts
const PDS = 'https://bsky.social';
const PUBLIC_API = 'https://public.api.bsky.app';
const HANDLE = 'nate.rip';

// Lexicon NSIDs for our custom records
const COLLECTION_POST = 'rip.nate.blog.post';
const COLLECTION_SHOT = 'rip.nate.shot';

export interface BlogPost {
  rkey: string;
  title: string;
  slug: string;
  description: string;
  content: string; // markdown
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

// Resolve handle to DID (needed for blob URLs)
let _did: string | null = null;
export async function resolveDid(): Promise<string> {
  if (_did) return _did;
  const res = await fetch(`${PUBLIC_API}/xrpc/com.atproto.identity.resolveHandle?handle=${HANDLE}`);
  if (!res.ok) throw new Error(`resolveHandle failed: ${res.status}`);
  const data = await res.json();
  _did = data.did;
  return _did!;
}
```

**Step 3: Commit**

```bash
git add src/lib/atproto.ts package.json package-lock.json && git commit -m "feat: atproto client for fetching records and blobs"
```

---

## Task 4: Local content loading (projects, lists, work)

**Files:**
- Create: `src/lib/content.ts`
- Create: `src/content/projects/*.md` (migrated from old site)
- Create: `src/content/lists/*.md` (migrated from old site)
- Create: `src/data/work.ts`

**Step 1: Write local content loader**

`src/lib/content.ts`:
```ts
import type { SvelteComponent } from 'svelte';

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  demoURL?: string;
  repoURL?: string;
}

export interface ContentEntry {
  meta: ContentMeta;
  component: typeof SvelteComponent;
}

// Load all .md files from a content directory using Vite's glob import
async function loadCollection(glob: Record<string, () => Promise<any>>): Promise<ContentEntry[]> {
  const entries: ContentEntry[] = [];
  for (const [path, resolver] of Object.entries(glob)) {
    const mod = await resolver();
    const slug = path.split('/').at(-1)?.replace('.md', '') || '';
    entries.push({
      meta: { slug, ...mod.metadata },
      component: mod.default
    });
  }
  return entries.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export async function loadProjects(): Promise<ContentEntry[]> {
  const glob = import.meta.glob('/src/content/projects/*.md');
  return loadCollection(glob);
}

export async function loadLists(): Promise<ContentEntry[]> {
  const glob = import.meta.glob('/src/content/lists/*.md');
  return loadCollection(glob);
}

export async function loadProject(slug: string): Promise<ContentEntry | null> {
  const projects = await loadProjects();
  return projects.find(p => p.meta.slug === slug) || null;
}

export async function loadList(slug: string): Promise<ContentEntry | null> {
  const lists = await loadLists();
  return lists.find(l => l.meta.slug === slug) || null;
}
```

**Step 2: Create work data**

`src/data/work.ts`:
```ts
export interface WorkEntry {
  company: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

export const work: WorkEntry[] = [
  { company: 'Zed Industries', role: 'Lead Designer', dateStart: '2021-01', dateEnd: 'Current', description: '' },
  { company: 'Facebook', role: 'Product Designer', dateStart: '2015-01', dateEnd: '2021-01', description: 'News Feed, Developer Experience, Productivity Tools, Facebook Stories' },
  { company: 'Format', role: 'Design Consultant', dateStart: '2014-01', dateEnd: '2014-12', description: '' },
  { company: 'LOOKBOOK', role: 'Designer & Developer', dateStart: '2013-01', dateEnd: '2014-01', description: '' },
  { company: 'York University', role: 'Web Developer', dateStart: '2011-01', dateEnd: '2013-01', description: '' }
];
```

**Step 3: Migrate content files**

Copy and normalize markdown files from the old site into the new structure. Strip old frontmatter, rewrite to simple mdsvex format:

Each project `.md` file:
```md
---
title: "Design Docs"
description: "An open source design doc site focused on helping early career designers"
date: "2021-01-01"
tags: ["design", "eng"]
demoURL: "https://www.designdocs.co/"
repoURL: "https://github.com/iamnbutler/design-docs"
---

Content here...
```

Each list `.md` file:
```md
---
title: "Design Resources"
description: "A curated collection of design resources and references."
date: "2021-03-08"
tags: ["design"]
---

Content here...
```

**Important:** Normalize ALL dates to ISO format `YYYY-MM-DD`. Strip any Astro-specific syntax (e.g., `import` statements, `<Image>` components). Convert image references to standard markdown `![alt](url)`.

**Step 4: Commit**

```bash
git add src/lib/content.ts src/data/work.ts src/content/ && git commit -m "feat: local content loader and migrated projects, lists, work data"
```

---

## Task 5: Upload script for atproto content

**Files:**
- Create: `scripts/upload.ts`
- Create: `scripts/lexicons/rip.nate.blog.post.json`
- Create: `scripts/lexicons/rip.nate.shot.json`

**Step 1: Define custom lexicons**

`scripts/lexicons/rip.nate.blog.post.json`:
```json
{
  "lexicon": 1,
  "id": "rip.nate.blog.post",
  "defs": {
    "main": {
      "type": "record",
      "key": "tid",
      "record": {
        "type": "object",
        "required": ["title", "slug", "content", "createdAt"],
        "properties": {
          "title": { "type": "string", "maxLength": 300 },
          "slug": { "type": "string", "maxLength": 200 },
          "description": { "type": "string", "maxLength": 1000 },
          "content": { "type": "string", "maxLength": 500000 },
          "tags": { "type": "array", "items": { "type": "string" }, "maxLength": 20 },
          "createdAt": { "type": "string", "format": "datetime" }
        }
      }
    }
  }
}
```

`scripts/lexicons/rip.nate.shot.json`:
```json
{
  "lexicon": 1,
  "id": "rip.nate.shot",
  "defs": {
    "main": {
      "type": "record",
      "key": "tid",
      "record": {
        "type": "object",
        "required": ["slug", "images", "createdAt"],
        "properties": {
          "title": { "type": "string", "maxLength": 300 },
          "slug": { "type": "string", "maxLength": 200 },
          "images": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["image"],
              "properties": {
                "image": { "type": "blob", "accept": ["image/*"], "maxSize": 10000000 },
                "alt": { "type": "string", "maxLength": 500 }
              }
            },
            "maxLength": 20
          },
          "tags": { "type": "array", "items": { "type": "string" }, "maxLength": 20 },
          "createdAt": { "type": "string", "format": "datetime" }
        }
      }
    }
  }
}
```

**Step 2: Write upload script**

`scripts/upload.ts`:
```ts
/**
 * Upload blog posts and shots to atproto PDS.
 * Usage: npx tsx scripts/upload.ts
 * Requires ATP_HANDLE and ATP_PASSWORD env vars (app password).
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import matter from 'gray-matter';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const agent = new AtpAgent({ service: 'https://bsky.social' });

async function login() {
  await agent.login({ identifier: HANDLE, password: PASSWORD });
  console.log(`Logged in as ${HANDLE}`);
}

async function uploadBlob(filePath: string): Promise<{ ref: any; mimeType: string; size: number }> {
  const data = readFileSync(filePath);
  const ext = extname(filePath).toLowerCase();
  const mimeTypes: Record<string, string> = {
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml'
  };
  const mimeType = mimeTypes[ext] || 'application/octet-stream';
  const res = await agent.uploadBlob(data, { encoding: mimeType });
  return { ref: res.data.blob, mimeType, size: data.length };
}

async function uploadPosts() {
  // Read blog posts from old site content that we've staged for upload
  const postsDir = join(process.cwd(), 'migrate', 'blog');
  if (!existsSync(postsDir)) { console.log('No migrate/blog directory, skipping posts'); return; }

  for (const dir of readdirSync(postsDir)) {
    const mdPath = join(postsDir, dir, 'index.md');
    if (!existsSync(mdPath)) continue;
    const raw = readFileSync(mdPath, 'utf-8');
    const { data: fm, content } = matter(raw);
    const slug = dir;
    const date = new Date(fm.date).toISOString();

    console.log(`Uploading post: ${fm.title} (${slug})`);
    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.blog.post',
      record: {
        $type: 'rip.nate.blog.post',
        title: fm.title,
        slug,
        description: fm.description || '',
        content,
        tags: fm.tags || [],
        createdAt: date
      }
    });
  }
}

async function uploadShots() {
  const shotsDir = join(process.cwd(), 'migrate', 'shots');
  if (!existsSync(shotsDir)) { console.log('No migrate/shots directory, skipping shots'); return; }

  for (const dir of readdirSync(shotsDir)) {
    const mdPath = join(shotsDir, dir, 'index.md');
    if (!existsSync(mdPath)) continue;
    const raw = readFileSync(mdPath, 'utf-8');
    const { data: fm } = matter(raw);
    const slug = dir;
    const date = new Date(fm.date).toISOString();

    // Find all images in directory
    const files = readdirSync(join(shotsDir, dir));
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg|gif|webp)$/i.test(f));

    const images = [];
    for (const img of imageFiles) {
      console.log(`  Uploading blob: ${img}`);
      const blob = await uploadBlob(join(shotsDir, dir, img));
      images.push({ image: blob.ref, alt: img.replace(/\.[^.]+$/, '') });
    }

    console.log(`Uploading shot: ${fm.title || slug} (${images.length} images)`);
    await agent.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'rip.nate.shot',
      record: {
        $type: 'rip.nate.shot',
        title: fm.title || '',
        slug,
        images,
        tags: fm.tags || [],
        createdAt: date
      }
    });
  }
}

async function main() {
  await login();
  await uploadPosts();
  await uploadShots();
  console.log('Done.');
}

main().catch(console.error);
```

**Step 3: Install upload script deps**

```bash
npm install @atproto/api gray-matter
npm install -D tsx
```

**Step 4: Commit**

```bash
git add scripts/ && git commit -m "feat: atproto upload script and custom lexicons"
```

---

## Task 6: Route — Home page (dense index)

**Files:**
- Create: `src/routes/+page.svelte`
- Create: `src/routes/+page.server.ts`

**Step 1: Write the home page server loader**

`src/routes/+page.server.ts`:
```ts
import { fetchPosts } from '$lib/atproto';
import { loadProjects, loadLists } from '$lib/content';
import { work } from '../data/work';

export async function load() {
  let posts;
  try {
    posts = await fetchPosts();
  } catch {
    posts = []; // graceful fallback when atproto is unreachable during dev
  }
  const projects = await loadProjects();
  const lists = await loadLists();
  return { posts, projects: projects.map(p => p.meta), lists: lists.map(l => l.meta), work };
}
```

**Step 2: Write the home page**

`src/routes/+page.svelte`:
```svelte
<script>
  let { data } = $props();
</script>

<div class="container">
  <header>
    <h1>Nate Butler</h1>
    <small>design, eng, rust</small>
  </header>

  <section>
    <h2>posts</h2>
    {#each data.posts as post}
      <div><a href="/blog/{post.slug}">{post.title}</a> <small>{post.date.slice(0, 10)}</small></div>
    {/each}
  </section>

  <section>
    <h2>projects</h2>
    {#each data.projects as project}
      <div><a href="/projects/{project.slug}">{project.title}</a> <small>{project.date.slice(0, 10)}</small></div>
    {/each}
  </section>

  <section>
    <h2>shots</h2>
    <div><a href="/shots">view all &rarr;</a></div>
  </section>

  <section>
    <h2>lists</h2>
    {#each data.lists as list}
      <div><a href="/lists/{list.slug}">{list.title}</a></div>
    {/each}
  </section>

  <section>
    <h2>work</h2>
    {#each data.work as w}
      <div>{w.company} <small>{w.role}, {w.dateStart}&ndash;{w.dateEnd}</small></div>
    {/each}
  </section>

  <footer>
    <small><a href="https://bsky.app/profile/nate.rip">bluesky</a> &middot; <a href="https://github.com/iamnbutler">github</a> &middot; iamnbutler@gmail.com</small>
  </footer>
</div>

<style>
  header, section, footer { margin-bottom: var(--sp-lg); }
  section > div { padding: var(--sp-xs) 0; }
  h2 { font-size: var(--fs); font-weight: 600; color: var(--fg-muted); margin-bottom: var(--sp-sm); text-transform: lowercase; }
  footer { border-top: 1px solid var(--border); padding-top: var(--sp); }
</style>
```

**Step 3: Commit**

```bash
git add src/routes/+page.svelte src/routes/+page.server.ts && git commit -m "feat: home page with dense index"
```

---

## Task 7: Route — Blog (list + post detail)

**Files:**
- Create: `src/routes/blog/+page.svelte`
- Create: `src/routes/blog/+page.server.ts`
- Create: `src/routes/blog/[slug]/+page.svelte`
- Create: `src/routes/blog/[slug]/+page.server.ts`

**Step 1: Blog list page**

`src/routes/blog/+page.server.ts`:
```ts
import { fetchPosts } from '$lib/atproto';

export async function load() {
  const posts = await fetchPosts();
  return { posts };
}
```

`src/routes/blog/+page.svelte`:
```svelte
<script>
  let { data } = $props();
</script>

<div class="container">
  <h1><a href="/">~</a> / posts</h1>
  {#each data.posts as post}
    <div><a href="/blog/{post.slug}">{post.title}</a> <small>{post.date.slice(0, 10)}</small></div>
  {/each}
</div>

<style>
  div > div { padding: var(--sp-xs) 0; }
</style>
```

**Step 2: Blog post detail page**

`src/routes/blog/[slug]/+page.server.ts`:
```ts
import { error } from '@sveltejs/kit';
import { fetchPost } from '$lib/atproto';

export async function load({ params }) {
  const post = await fetchPost(params.slug);
  if (!post) throw error(404, 'Post not found');
  return { post };
}
```

`src/routes/blog/[slug]/+page.svelte`:
```svelte
<script>
  let { data } = $props();
</script>

<div class="container prose">
  <small><a href="/blog">&larr; posts</a></small>
  <h1>{data.post.title}</h1>
  <small>{data.post.date.slice(0, 10)}</small>
  {@html data.post.renderedContent}
</div>
```

**Note:** We'll need to render markdown on the server side. Update the atproto module to render markdown content via a shared markdown renderer, or render it client-side. Simplest: render during the server load using a markdown lib.

Add to `src/lib/atproto.ts` — a `fetchPostRendered` function that uses `marked` or we process it during build. Alternatively, since we're using mdsvex, we can process it with `unified`/`remark` at build time. We'll address this during implementation — the key decision is to render markdown server-side in the load function.

**Step 3: Commit**

```bash
git add src/routes/blog/ && git commit -m "feat: blog list and post detail routes"
```

---

## Task 8: Route — Shots (grid + detail)

**Files:**
- Create: `src/routes/shots/+page.svelte`
- Create: `src/routes/shots/+page.server.ts`
- Create: `src/routes/shots/[slug]/+page.svelte`
- Create: `src/routes/shots/[slug]/+page.server.ts`

**Step 1: Shots grid**

`src/routes/shots/+page.server.ts`:
```ts
import { fetchShots, resolveDid, blobUrl } from '$lib/atproto';

export async function load() {
  const [shots, did] = await Promise.all([fetchShots(), resolveDid()]);
  return {
    shots: shots.map(s => ({
      ...s,
      thumb: s.images[0] ? blobUrl(did, s.images[0].cid) : null
    }))
  };
}
```

`src/routes/shots/+page.svelte`:
```svelte
<script>
  let { data } = $props();
</script>

<div class="container">
  <h1><a href="/">~</a> / shots</h1>
  <div class="grid">
    {#each data.shots as shot}
      <a href="/shots/{shot.slug}">
        {#if shot.thumb}<img src={shot.thumb} alt={shot.title} loading="lazy" />{/if}
        <small>{shot.title || shot.slug}</small>
      </a>
    {/each}
  </div>
</div>

<style>
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--sp); }
  .grid a { display: block; }
  .grid img { aspect-ratio: 1; object-fit: cover; border: 1px solid var(--border); }
</style>
```

**Step 2: Shot detail**

`src/routes/shots/[slug]/+page.server.ts`:
```ts
import { error } from '@sveltejs/kit';
import { fetchShot, resolveDid, blobUrl } from '$lib/atproto';

export async function load({ params }) {
  const [shot, did] = await Promise.all([fetchShot(params.slug), resolveDid()]);
  if (!shot) throw error(404, 'Shot not found');
  return {
    shot: { ...shot, images: shot.images.map(img => ({ ...img, url: blobUrl(did, img.cid) })) }
  };
}
```

`src/routes/shots/[slug]/+page.svelte`:
```svelte
<script>
  let { data } = $props();
</script>

<div class="container">
  <small><a href="/shots">&larr; shots</a></small>
  {#if data.shot.title}<h1>{data.shot.title}</h1>{/if}
  {#each data.shot.images as img}
    <img src={img.url} alt={img.alt || ''} />
  {/each}
</div>

<style>
  img { margin-top: var(--sp); border: 1px solid var(--border); }
</style>
```

**Step 3: Commit**

```bash
git add src/routes/shots/ && git commit -m "feat: shots grid and detail routes"
```

---

## Task 9: Routes — Projects, Lists, Work

**Files:**
- Create: `src/routes/projects/+page.svelte`, `+page.server.ts`
- Create: `src/routes/projects/[slug]/+page.svelte`, `+page.server.ts`
- Create: `src/routes/lists/+page.svelte`, `+page.server.ts`
- Create: `src/routes/lists/[slug]/+page.svelte`, `+page.server.ts`
- Create: `src/routes/work/+page.svelte`

These follow the same pattern as blog but use local content loaders. Projects and lists render their mdsvex component directly. Work is a single page with the work data.

**Step 1: Projects routes**

`src/routes/projects/+page.server.ts` — calls `loadProjects()`, returns `meta` array.
`src/routes/projects/+page.svelte` — lists project titles with links.
`src/routes/projects/[slug]/+page.server.ts` — calls `loadProject(params.slug)`.
`src/routes/projects/[slug]/+page.svelte` — renders the mdsvex component with `<svelte:component>`.

**Step 2: Lists routes** — same pattern as projects but with `loadLists()` / `loadList()`.

**Step 3: Work route** — single page, imports `work` from data, renders a list.

**Step 4: Commit**

```bash
git add src/routes/projects/ src/routes/lists/ src/routes/work/ && git commit -m "feat: projects, lists, and work routes"
```

---

## Task 10: Content migration — prepare migrate directory

**Files:**
- Create: `migrate/blog/*/index.md` (10 posts)
- Create: `migrate/shots/*/index.md` + images (25 shot directories)

**Step 1: Copy blog posts from old site**

Copy each blog post's `index.md` from `src/content/blog/*/` to `migrate/blog/*/index.md`. Normalize frontmatter:
- Dates to ISO `YYYY-MM-DD`
- Strip Astro-specific imports/components
- Keep markdown content as-is

**Step 2: Copy shots from old site**

Copy each shot directory (markdown + images) from `src/content/shots/*/` to `migrate/shots/*/`. Normalize frontmatter. Keep all image files.

**Step 3: Commit**

```bash
git add migrate/ && git commit -m "content: prepare blog and shots for atproto upload"
```

---

## Task 11: Markdown rendering for atproto content

**Files:**
- Create: `src/lib/markdown.ts`

**Step 1: Install markdown renderer**

```bash
npm install unified remark-parse remark-rehype rehype-stringify rehype-shiki
```

**Step 2: Write markdown renderer**

`src/lib/markdown.ts`:
```ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from 'rehype-shiki';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeShiki, { theme: 'github-dark' })
  .use(rehypeStringify);

export async function renderMarkdown(md: string): Promise<string> {
  const result = await processor.process(md);
  return String(result);
}
```

**Step 3: Use in blog post loader**

Update `src/routes/blog/[slug]/+page.server.ts` to call `renderMarkdown(post.content)` and pass `renderedContent` to the page.

**Step 4: Commit**

```bash
git add src/lib/markdown.ts && git commit -m "feat: server-side markdown rendering with shiki"
```

---

## Task 12: GitHub Actions deploy

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Write deploy workflow**

`.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Commit**

```bash
git add .github/ && git commit -m "ci: github actions deploy to pages"
```

---

## Task 13: Spool setup and project tracking

**Files:**
- Create: `.spool/` (via `spool init`)
- Create: `.claude/skills/spool.md` (copy from spool repo)

**Step 1: Install spool and initialize**

```bash
cargo install spool-cli
spool init
```

**Step 2: Copy spool skill**

Copy the spool skill content (from https://github.com/iamnbutler/spool/blob/main/skills/spool.md) to `.claude/skills/spool.md`.

**Step 3: Create initial streams and tasks for remaining work**

```bash
spool stream add "atproto" -d "AT Protocol integration"
spool stream add "content" -d "Content migration"
spool stream add "polish" -d "Final polish and fixes"
```

**Step 4: Commit**

```bash
git add .spool/ .claude/ && git commit -m "chore: spool init and skill setup"
```

---

## Task 14: Verify build and local dev

**Step 1: Run dev server**

```bash
npm run dev
```

Verify:
- Home page renders with all sections
- Navigation between pages works
- CSS theme applies correctly
- No build errors

**Step 2: Run production build**

```bash
npm run build
```

Verify:
- Build completes without errors
- Static files generated in `build/`
- CNAME file present

**Step 3: Commit any fixes**

```bash
git add -A && git commit -m "fix: build and dev server verification"
```

---

## Execution order

Tasks 1-2 are foundational (must be first, sequential).
Task 3 (atproto client) and Task 4 (local content) can run in parallel.
Task 5 (upload script) depends on Task 3.
Tasks 6-9 (routes) depend on Tasks 3+4, can be parallelized.
Task 10 (migration) can run anytime after Task 4.
Task 11 (markdown rendering) depends on Task 3, needed before Task 7 is complete.
Task 12 (deploy) is independent.
Task 13 (spool) is independent.
Task 14 (verify) is last.
