import { fetchAllFragments } from '../src/lib/atproto';

try {
  const fragments = await fetchAllFragments();
  console.log(`Validated ${fragments.length} fragments with unique URLs.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
