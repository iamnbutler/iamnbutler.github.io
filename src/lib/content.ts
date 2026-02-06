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
  default: any; // svelte component from mdsvex
}

async function loadCollection(glob: Record<string, () => Promise<any>>): Promise<ContentEntry[]> {
  const entries: ContentEntry[] = [];
  for (const [path, resolver] of Object.entries(glob)) {
    const mod = await resolver();
    const slug = path.split('/').at(-1)?.replace('.md', '') || '';
    entries.push({
      meta: { slug, title: '', description: '', date: '', tags: [], ...mod.metadata },
      default: mod.default
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
