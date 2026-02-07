/**
 * Upload intake shots to atproto PDS.
 * Usage: env $(cat .env | xargs) npx tsx scripts/upload-intake.ts [--dry-run]
 *
 * Reads files from intake/, parses date + title from filename convention:
 *   YYYY_MM_DD_Title_Words.ext  (single image)
 *   YYYY_MM_DD_Title_Words/     (folder = multiple images)
 *
 * Skips non-image files (e.g. .mp4).
 */
import { AtpAgent } from '@atproto/api';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
if (!PASSWORD) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

const DRY_RUN = process.argv.includes('--dry-run');
const INTAKE_DIR = join(process.cwd(), 'intake');

const MIME: Record<string, string> = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.mp4': 'video/mp4',
};

const MEDIA_EXTS = new Set(Object.keys(MIME));

type IntakeShot = {
  title: string;
  date: Date;
  images: string[]; // absolute paths
};

// Parse "YYYY_MM_DD_Some_Title" → { date, title }
function parseName(name: string): { date: Date; title: string } {
  const m = name.match(/^(\d{4})_(\d{2})_(\d{2})_(.+)$/);
  if (!m) throw new Error(`Cannot parse intake name: ${name}`);
  const date = new Date(`${m[1]}-${m[2]}-${m[3]}T00:00:00Z`);
  const title = m[4].replace(/_/g, ' ').replace(/\.[^.]+$/, ''); // strip extension if file
  return { date, title };
}

// --- Scan intake directory ---

const shots: IntakeShot[] = [];

for (const entry of readdirSync(INTAKE_DIR)) {
  if (entry.startsWith('.')) continue;
  const fullPath = join(INTAKE_DIR, entry);
  const stat = statSync(fullPath);

  if (stat.isDirectory()) {
    // Folder = multi-image shot
    const images = readdirSync(fullPath)
      .filter(f => !f.startsWith('.') && MEDIA_EXTS.has(extname(f).toLowerCase()))
      .sort()
      .map(f => join(fullPath, f));

    if (images.length === 0) {
      console.warn(`  skip dir (no images): ${entry}`);
      continue;
    }

    const { date, title } = parseName(entry);
    shots.push({ title, date, images });
  } else {
    // Single file
    const ext = extname(entry).toLowerCase();
    if (!MEDIA_EXTS.has(ext)) {
      console.warn(`  skip non-image: ${entry}`);
      continue;
    }
    const nameNoExt = entry.replace(/\.[^.]+$/, '');
    const { date, title } = parseName(nameNoExt);
    shots.push({ title, date, images: [fullPath] });
  }
}

// Sort chronologically
shots.sort((a, b) => a.date.getTime() - b.date.getTime());

// --- Determine fragment IDs ---
// Existing fragments go up to 44. New ones start at 45.
const START_ID = 45;

console.log(`\nFound ${shots.length} intake shots:\n`);
shots.forEach((s, i) => {
  const id = START_ID + i;
  const totalBytes = s.images.reduce((sum, p) => sum + statSync(p).size, 0);
  console.log(`  #${id} | ${s.date.toISOString().slice(0, 10)} | ${s.title} (${s.images.length} img, ${(totalBytes / 1024 / 1024).toFixed(1)}MB)`);
});

if (DRY_RUN) {
  console.log('\n--dry-run: not uploading');
  process.exit(0);
}

// --- Upload ---

const agent = new AtpAgent({ service: 'https://bsky.social' });
await agent.login({ identifier: HANDLE, password: PASSWORD });
console.log(`\nLogged in as ${HANDLE}\n`);

for (let i = 0; i < shots.length; i++) {
  const shot = shots[i];
  const fragmentId = START_ID + i;
  const createdAt = shot.date.toISOString();

  // Upload image blobs
  const blobs = [];
  for (const imgPath of shot.images) {
    const buf = readFileSync(imgPath);
    const ext = extname(imgPath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const { data } = await agent.uploadBlob(buf, { encoding: mime });
    blobs.push(data.blob);
    console.log(`  blob: ${basename(imgPath)} (${(buf.length / 1024).toFixed(0)}KB)`);
  }

  // Create shot record
  await agent.com.atproto.repo.createRecord({
    repo: agent.session!.did,
    collection: 'rip.nate.shot',
    record: {
      $type: 'rip.nate.shot',
      fragmentId,
      title: shot.title,
      images: blobs,
      createdAt,
    },
  });
  console.log(`[${fragmentId}] shot: ${shot.title} (${blobs.length} images)`);

  // Rate limit courtesy
  await new Promise(r => setTimeout(r, 200));
}

console.log(`\nDone. Uploaded ${shots.length} shots (IDs ${START_ID}–${START_ID + shots.length - 1}).`);
