import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const modules = import.meta.glob('/src/content/lists/*.md');
  const path = `/src/content/lists/${params.slug}.md`;
  if (!modules[path]) throw error(404, 'List not found');
  const mod: any = await modules[path]();
  return { meta: { slug: params.slug, ...mod.metadata }, component: mod.default };
}
