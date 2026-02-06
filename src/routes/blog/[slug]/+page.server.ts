import { error } from '@sveltejs/kit';
import { fetchPost } from '$lib/atproto';

export async function load({ params }) {
  let post;
  try { post = await fetchPost(params.slug); } catch { throw error(404, 'Post not found'); }
  if (!post) throw error(404, 'Post not found');
  return { post };
}
