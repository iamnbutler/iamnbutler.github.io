import { fetchShots, resolveDid, blobUrl } from '$lib/atproto';

export async function load() {
  let shots: any[] = [];
  let did = '';
  try {
    [shots, did] = await Promise.all([fetchShots(), resolveDid()]);
  } catch {}
  return {
    shots: shots.map(s => ({
      ...s,
      thumb: s.images[0] ? blobUrl(did, s.images[0].cid) : null
    }))
  };
}
