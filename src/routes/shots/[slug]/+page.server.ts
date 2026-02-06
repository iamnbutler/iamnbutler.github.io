import { error } from '@sveltejs/kit';
import { fetchShot, resolveDid, blobUrl } from '$lib/atproto';

export async function load({ params }) {
  let shot, did;
  try {
    [shot, did] = await Promise.all([fetchShot(params.slug), resolveDid()]);
  } catch { throw error(404, 'Shot not found'); }
  if (!shot) throw error(404, 'Shot not found');
  return {
    shot: { ...shot, images: shot.images.map((img: any) => ({ ...img, url: blobUrl(did, img.cid) })) }
  };
}
