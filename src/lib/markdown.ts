import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import rehypeSlug from 'rehype-slug';
import type { Root, RootContent } from 'hast';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypeShiki, {
    theme: 'github-dark-dimmed',
  })
  .use(rehypeStringify, { allowDangerousHtml: true });

export interface MarkdownHeading {
  text: string;
  slug: string;
  level: 2 | 3;
}

function headingText(node: RootContent): string {
  if (node.type === 'text') return node.value;
  return 'children' in node ? node.children.map(headingText).join('') : '';
}

/** Render once, collecting TOC entries from the same AST and IDs as the HTML. */
export async function renderMarkdownWithHeadings(md: string): Promise<{
  html: string;
  headings: MarkdownHeading[];
}> {
  const tree = await processor.run(processor.parse(md));
  const headings: MarkdownHeading[] = [];

  function collect(node: Root | RootContent): void {
    if (node.type === 'element' && (node.tagName === 'h2' || node.tagName === 'h3')) {
      const id = node.properties.id;
      // Even an empty ID (e.g. a punctuation-only heading) is rehype-slug's ID.
      if (typeof id === 'string') {
        headings.push({
          text: headingText(node),
          slug: id,
          level: node.tagName === 'h2' ? 2 : 3,
        });
      }
    }
    if ('children' in node) node.children.forEach(collect);
  }

  collect(tree);
  return { html: processor.stringify(tree), headings };
}

export async function renderMarkdown(md: string): Promise<string> {
  return (await renderMarkdownWithHeadings(md)).html;
}
