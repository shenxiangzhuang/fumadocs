import env from '@next/env';
import { writeOgImages } from './generate-og-images';
import { updateSearchIndexes } from './update-index.mjs';
import { readFile } from 'node:fs/promises';
import type { SearchIndex } from 'fumadocs-mdx';

env.loadEnvConfig(process.cwd());

const path = '.next/server/chunks/fumadocs_search.json';
async function main() {
  const indexes = JSON.parse(
    (await readFile(path)).toString(),
  ) as SearchIndex[];

  await Promise.all([writeOgImages(indexes), updateSearchIndexes(indexes)]);
}

await main().catch((e) => {
  console.error('Failed to run post build script', e);
  throw e;
});
