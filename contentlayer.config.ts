import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";

const computedFields: ComputedFields = {
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Fragment = defineDocumentType(() => ({
  name: "Fragment",
  filePathPattern: "fragment/*.mdx",
  bodyType: "mdx",
  fields: {
    date: { type: "string", required: true },
    fragment: { type: "string", required: true },
    slug: { type: "string", required: true },
    title: { type: "string", required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Fragment],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
  },
});

export default contentLayerConfig;
