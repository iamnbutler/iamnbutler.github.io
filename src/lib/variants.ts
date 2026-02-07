import type { Fragment, BskyPost } from './types';

// === Post variants ===

export const POST_VARIANTS = ['cassette', 'circuit', 'blast'] as const;
export type PostVariant = (typeof POST_VARIANTS)[number];

export function postMeta(i: number, contentLen: number): {
  cls: string;
  showExcerpt: boolean;
  variant: PostVariant;
} {
  const variant = POST_VARIANTS[i % POST_VARIANTS.length];
  if (contentLen > 2000 && i % 4 === 0)
    return { cls: 'tile-text-lg', showExcerpt: true, variant };
  if (i % 7 === 0)
    return { cls: 'tile-text-tall', showExcerpt: true, variant };
  if (i % 3 === 0)
    return { cls: 'tile-w', showExcerpt: true, variant };
  return { cls: '', showExcerpt: false, variant };
}

// === Shot variants ===

export const SHOT_VARIANTS = ['viewfinder', 'evidence', 'hud'] as const;
export type ShotVariant = (typeof SHOT_VARIANTS)[number];

export function shotMeta(i: number, imgCount: number): {
  cls: string;
  isHero: boolean;
  variant: ShotVariant;
} {
  const variant = SHOT_VARIANTS[i % SHOT_VARIANTS.length];
  if (imgCount >= 3 && i % 6 === 0)
    return { cls: 'tile-hero-wide', isHero: true, variant };
  if (i % 7 === 0)
    return { cls: 'tile-3w', isHero: false, variant };
  if (i % 4 === 0)
    return { cls: 'tile-w tile-t', isHero: false, variant };
  return { cls: 'tile-w', isHero: false, variant };
}

// === Link variants ===

export const LINK_VARIANTS = ['relay', 'dispatch'] as const;
export type LinkVariant = (typeof LINK_VARIANTS)[number];

export function linkVariant(f: Fragment): LinkVariant {
  return f.id % 2 === 0 ? 'dispatch' : 'relay';
}

// === Bsky sizing ===

export function bskySize(p: BskyPost, i: number): string {
  if (p.video) return 'tile-bsky-hero';
  if (p.images && p.images.length >= 2) return 'tile-bsky-hero';
  if (p.images?.length === 1)
    return i % 3 === 0 ? 'tile-bsky-hero' : 'tile-w';
  if (p.hasMedia) return 'tile-w';
  return '';
}

// === Helpers ===

export function excerpt(text: string, len: number = 120): string {
  return text
    .replace(/[#*_\[\]()>`~\-]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, len);
}

export function extractListItems(content: string, max: number = 5): string[] {
  const items: string[] = [];
  for (const line of content.split('\n')) {
    if (items.length >= max) break;
    const h = line.match(/^##\s+(.+)/);
    if (h) {
      items.push(h[1].replace(/\*\*/g, ''));
      continue;
    }
    const b = line.match(/^[-*]\s+(.+)/);
    if (b && !line.startsWith('  ')) {
      items.push(
        b[1]
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/\*\*/g, '')
          .trim(),
      );
    }
  }
  return items;
}

export function countListItems(content: string): number {
  return content.split('\n').filter((l) => l.match(/^(##\s|[-*]\s)/)).length;
}

export function relTime(iso: string): string {
  const d = new Date(iso);
  const now = Date.now();
  const diff = now - d.getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return d.toISOString().slice(0, 10);
}
