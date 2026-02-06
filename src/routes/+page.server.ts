import { fetchPosts, fetchShots } from '$lib/atproto';
import { loadProjects, loadLists } from '$lib/content';
import { work } from '../data/work';

export async function load() {
  let posts: any[] = [];
  let shots: any[] = [];
  try { posts = await fetchPosts(); } catch {}
  try { shots = await fetchShots(); } catch {}
  const projects = await loadProjects();
  const lists = await loadLists();
  return {
    posts,
    shots: shots.slice(0, 6),
    projects: projects.map(p => p.meta),
    lists: lists.map(l => l.meta),
    work
  };
}
