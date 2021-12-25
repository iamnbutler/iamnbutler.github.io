import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';

const computedFields: ComputedFields = {
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Fragment = defineDocumentType(() => ({
  name: 'Fragment',
  filePathPattern: 'fragment/*.mdx',
  bodyType: 'mdx',
  fields: {
    fragment: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
  },
  computedFields
}));

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'page/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Fragment, Page],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
});

export default contentLayerConfig;
