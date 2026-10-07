// Test-process-only fetch fixture. Production builds always use real APIs.
const originalFetch = globalThis.fetch;
const did = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const records = ['post', 'shot', 'list', 'link'].map((type, i) => ({
  uri: `at://${did}/site.standard.document/fixture-${i + 1}`,
  value: {
    site: `at://${did}/site.standard.publication/self`,
    fragmentId: i + 1, fragmentType: type, path: `/f/${i + 1}`,
    title: `Fixture ${type}`, publishedAt: '2026-01-01T00:00:00Z',
    content: { text: '## Repeated heading\n\nExample content.\n\n## Repeated heading\n\n- Example item' },
    ...(type === 'shot' ? { images: [{ ref: { $link: 'fixture-image' }, mimeType: 'image/png', alt: 'Fixture image' }] } : {}),
    ...(type === 'link' ? { externalUrl: 'https://example.com/' } : {}),
  },
}));
globalThis.fetch = async (input, init) => {
  const url = new URL(input instanceof Request ? input.url : input);
  if (url.hostname === 'morel.us-east.host.bsky.network') return Response.json({ records });
  if (url.hostname === 'public.api.bsky.app') {
    if (url.pathname.endsWith('getAuthorFeed')) return Response.json({ feed: [] });
    return Response.json({ thread: { post: {
      uri: url.searchParams.get('uri'), record: { text: 'Fixture Bluesky post', createdAt: '2026-01-01T00:00:00Z' },
      author: { handle: 'nate.rip', displayName: 'Nate' },
      embed: { $type: 'app.bsky.embed.video#view', playlist: 'https://example.com/video.m3u8', thumbnail: 'https://example.com/poster.png' },
    } } });
  }
  return originalFetch(input, init);
};
