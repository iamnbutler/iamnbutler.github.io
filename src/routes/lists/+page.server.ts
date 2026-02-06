import { loadLists } from '$lib/content';

export async function load() {
  const lists = await loadLists();
  return { lists: lists.map(l => l.meta) };
}
