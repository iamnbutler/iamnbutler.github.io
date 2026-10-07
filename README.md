# nate.rip

Astro 5 static site with Svelte 5 theme-editor components. Content is fetched from public AT Protocol records during generation; Markdown drafts in this repository are not automatically published.

## Local development and validation

Use Node 22 (matching CI).

```sh
npm ci
npm test                # Offline unit tests
npm run check:core      # Strict TS check of libraries, current publishers, and tests
npm run test:build      # Offline Astro build using test-only content, plus HTML assertions
npm run check:content   # Read-only validation of live public document records
npm run dev             # Uses live content
npm run build           # Production build; uses live content and rejects invalid/duplicate URLs
npm run preview
```

`test:build` writes **fixture content** to `dist/`. Never deploy that output. Run a successful `npm run build` before previewing production content or deploying. The deployment workflow runs the real build, not the fixture build. `check:core` does not type-check Astro/Svelte templates or historical migration scripts; the offline build compiles templates.

## Structure

- `src/pages/index.astro`: mosaic, fragment filters, pinned Bluesky posts, and feed.
- `src/pages/f/[id].astro`: fragment detail pages.
- `src/lib/atproto.ts`: public API reads, complete pagination, document validation.
- `src/lib/markdown.ts`: Markdown rendering and TOC derived from rendered heading IDs.
- `src/styles/theme.css`: shared tokens and styles.
- `/demo/`: component exploration catalog. Append `?edit` to open the theme editor.
- `static/`: copied to build output, including `CNAME`.

## Publishing

The maintained single-document entry points are `scripts/upload-post.ts` and `scripts/upload-link.ts`. Supply `ATP_PASSWORD` securely in the environment; never commit credentials. `ATP_HANDLE` may override the login handle, but the authenticated DID must match the site's configured DID.

```sh
npx tsx scripts/upload-post.ts scripts/posts/example.md 100 "Title" --dry-run
npx tsx scripts/upload-link.ts https://example.com 101 "Title" "Comment" --dry-run
```

Both support `--date ISO` and `--dry-run`. Dry runs validate local arguments/assets and perform no publishing writes; link-title resolution may read the target URL. Dry runs do not log in or establish that an ID is available. A real publish checks the account and all existing document pages for the requested ID/path before uploading blobs or creating a record. This is not an atomic reservation: avoid concurrent publishers. Check content afterwards and trigger a production rebuild to update the static site.

Historical tools (`upload.ts`, `upload-intake.ts`, `upload-remaining.ts`, `reupload-posts.ts`, `migrate-to-standard.ts`, and deletion utilities) are **not** the maintained publishing path and are not covered by the new preflight safeguards. Some write obsolete `rip.nate.*` collections; others create duplicate records on rerun. `reupload-posts.ts` deletes before reading replacements. Do not run these as routine maintenance. Any migration needs a backup, a reviewed record-by-record plan, and verification before deletion.

## Content repair required

The read-only audit on 2026-10-06 found 130 document records with 63 unique fragment IDs; all 63 IDs were repeated. This is broader than the duplication visible in the last deployed homepage. In addition to repeated titles, distinct content shares IDs:

- `/f/56`: **Spool** and **Breathe**
- `/f/57`: **Ferrotype** and **Product Design Is Lost**

The validator intentionally blocks production generation instead of choosing a record arbitrarily and silently overwriting URLs. Run `npm run check:content` for current titles and AT record URIs. No records were changed by this cleanup. Repair needs a backed-up comparison of repeated records, canonical record selection, and an explicit ID/link migration for distinct content. Do not disable validation to deploy around this issue.

## Deployment

GitHub Pages deploys on pushes to `v23`, or manual workflow dispatch. The checkout's `main` branch does not trigger this workflow. That branch policy is intentionally unchanged. Publishing a PDS record does not trigger a rebuild by itself.

PR checks run offline tests, core type checking, and the fixture build. Production deployment runs unit tests, core type checking, and the real build before uploading an artifact; an invalid content snapshot cannot replace the deployed site.

## Follow-up

The existing dependency lock reports security advisories, including a critical advisory on Astro. Review and upgrade dependencies in a separate compatibility-tested change; do not apply `npm audit fix --force` blindly. Automated audit fixes currently recommend major framework/integration upgrades. Visual redesign, publication-record changes, and deployment-branch changes are outside this first mechanical cleanup.
