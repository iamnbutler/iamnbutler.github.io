import { fetchPosts } from '$lib/atproto';

export async function load() {
  let posts: any[] = [];
  try { posts = await fetchPosts(); } catch {}
  return { posts };
}
