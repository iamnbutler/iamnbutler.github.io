import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const modules = import.meta.glob('/src/content/projects/*.md');
  const path = `/src/content/projects/${params.slug}.md`;
  if (!modules[path]) throw error(404, 'Project not found');
  const mod: any = await modules[path]();
  return { meta: { slug: params.slug, ...mod.metadata }, component: mod.default };
}
