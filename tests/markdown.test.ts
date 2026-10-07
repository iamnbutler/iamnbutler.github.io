import assert from 'node:assert/strict';
import test from 'node:test';
import { renderMarkdown, renderMarkdownWithHeadings } from '../src/lib/markdown';
import type { MarkdownHeading } from '../src/lib/markdown';

async function assertHeadings(markdown: string, expected: MarkdownHeading[]) {
  const result = await renderMarkdownWithHeadings(markdown);
  assert.deepEqual(result.headings, expected);
  // Check every TOC target against the actual rendered h2/h3 IDs, in order.
  const rendered = [...result.html.matchAll(/<h([23]) id="([^"]*)">/g)]
    .map((match) => ({ level: Number(match[1]), slug: match[2] }));
  assert.deepEqual(rendered, expected.map(({ level, slug }) => ({ level, slug })));
  return result;
}

test('duplicate IDs account for all heading levels, while TOC contains only h2/h3', async () => {
  await assertHeadings('# Repeat\n\n## Repeat\n\n### Repeat\n\n#### Repeat\n\n## Repeat', [
    { text: 'Repeat', slug: 'repeat-1', level: 2 },
    { text: 'Repeat', slug: 'repeat-2', level: 3 },
    { text: 'Repeat', slug: 'repeat-4', level: 2 },
  ]);
});

test('explicit suffixes and duplicate headings use rehype-slug collision handling', async () => {
  await assertHeadings('## Topic\n\n## Topic\n\n### Topic-1\n\n## Topic', [
    { text: 'Topic', slug: 'topic', level: 2 },
    { text: 'Topic', slug: 'topic-1', level: 2 },
    { text: 'Topic-1', slug: 'topic-1-1', level: 3 },
    { text: 'Topic', slug: 'topic-2', level: 2 },
  ]);
});

test('punctuation, underscores and empty slugs match rendered IDs', async () => {
  await assertHeadings("## Hello, world! What's next?\n\n### snake_case\n\n## !!!\n\n### !!!", [
    { text: "Hello, world! What's next?", slug: 'hello-world-whats-next', level: 2 },
    { text: 'snake_case', slug: 'snake_case', level: 3 },
    { text: '!!!', slug: '', level: 2 },
    { text: '!!!', slug: '-1', level: 3 },
  ]);
});

test('inline formatting and links contribute visible text, not markdown or URLs', async () => {
  const { html } = await assertHeadings('## **Bold** *emphasis* `code` [linked text](https://example.com/path) &amp; more', [
    { text: 'Bold emphasis code linked text & more', slug: 'bold-emphasis-code-linked-text--more', level: 2 },
  ]);
  assert.match(html, /<strong>Bold<\/strong>/);
  assert.match(html, /<a href="https:\/\/example.com\/path">linked text<\/a>/);
});

test('unicode text is preserved in heading labels and IDs', async () => {
  await assertHeadings('## Café déjà vu\n\n### 你好 世界\n\n## Café déjà vu', [
    { text: 'Café déjà vu', slug: 'café-déjà-vu', level: 2 },
    { text: '你好 世界', slug: '你好-世界', level: 3 },
    { text: 'Café déjà vu', slug: 'café-déjà-vu-1', level: 2 },
  ]);
});

test('fenced and indented fake headings neither enter the TOC nor consume IDs', async () => {
  const { html } = await assertHeadings([
    '```md', '## Real', '### Fake', '```', '',
    '~~~', '## Real', '### Another fake', '~~~', '',
    '    ## Indented fake', '', '## Real', '', '### Real',
  ].join('\n'), [
    { text: 'Real', slug: 'real', level: 2 },
    { text: 'Real', slug: 'real-1', level: 3 },
  ]);
  assert.match(html, /<pre/);
});

test('setext, nested and closing-marker headings follow parsed markdown structure', async () => {
  await assertHeadings('Setext heading\n--------------\n\n> ### Nested *heading*\n\n  ## Closing markers ##', [
    { text: 'Setext heading', slug: 'setext-heading', level: 2 },
    { text: 'Nested heading', slug: 'nested-heading', level: 3 },
    { text: 'Closing markers', slug: 'closing-markers', level: 2 },
  ]);
});

test('empty and heading-free content have no TOC entries', async () => {
  const { html } = await assertHeadings('', []);
  assert.equal(html, '');
  await assertHeadings('Ordinary **paragraph**.\n\n# Title\n\n#### Minor heading', []);
});

test('heading collections and slug counters are isolated between concurrent renders', async () => {
  const expected: MarkdownHeading[] = [
    { text: 'Same', slug: 'same', level: 2 },
    { text: 'Same', slug: 'same-1', level: 3 },
  ];
  await Promise.all(Array.from({ length: 3 }, () => assertHeadings('## Same\n\n### Same', expected)));
  await assertHeadings('## Same\n\n### Same', expected);
});

test('renderMarkdown remains compatible with the combined rendering API', async () => {
  const markdown = '## Heading\n\nSome **content**.\n\n```js\nconst x = 1;\n```';
  assert.equal(await renderMarkdown(markdown), (await renderMarkdownWithHeadings(markdown)).html);
});
