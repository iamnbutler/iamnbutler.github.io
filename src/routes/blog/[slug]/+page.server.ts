import { error } from '@sveltejs/kit';
import { fetchPost } from '$lib/atproto';
import { renderMarkdown } from '$lib/markdown';

export async function load({ params }) {
  let post;
  try { post = await fetchPost(params.slug); } catch { throw error(404, 'Post not found'); }
  if (!post) throw error(404, 'Post not found');
  const html = await renderMarkdown(post.content);
  return { post: { ...post, html } };
}
