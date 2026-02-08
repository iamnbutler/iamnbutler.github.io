import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import rehypeSlug from 'rehype-slug';

let processor: any;

async function getProcessor() {
  if (!processor) {
    processor = unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypeShiki, {
        theme: 'github-dark-dimmed',
      })
      .use(rehypeStringify, { allowDangerousHtml: true });
  }
  return processor;
}

export async function renderMarkdown(md: string): Promise<string> {
  const result = await (await getProcessor()).process(md);
  return String(result);
}

/** Extract heading text + slug pairs for TOC generation */
export function extractHeadings(md: string): { text: string; slug: string; level: number }[] {
  const headings: { text: string; slug: string; level: number }[] = [];
  for (const line of md.split('\n')) {
    const m = line.match(/^(#{2,3})\s+(.+)/);
    if (m) {
      const text = m[2].replace(/[*_`\[\]()]/g, '').trim();
      const slug = text.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
      headings.push({ text, slug, level: m[1].length });
    }
  }
  return headings;
}
