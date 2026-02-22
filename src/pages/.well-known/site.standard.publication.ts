import type { APIRoute } from 'astro';

const DID = 'did:plc:5dnwnjydruv7wmbi33xchkr6';
const PUBLICATION_RKEY = 'self';

export const GET: APIRoute = () => {
  const atUri = `at://${DID}/site.standard.publication/${PUBLICATION_RKEY}`;
  return new Response(atUri, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
