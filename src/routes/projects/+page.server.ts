import { loadProjects } from '$lib/content';

export async function load() {
  const projects = await loadProjects();
  return { projects: projects.map(p => p.meta) };
}
