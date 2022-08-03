import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import remarkPrism from "remark-prism"
import remarkStringify from "remark-stringify"

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: "string", required: true },
  },
}))

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.md",
  contentType: "mdx",
  fields: {
    uuid: { type: "string", required: true },
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    status: { type: "string", required: true },
    date_created: { type: "date", required: true },
    date_modified: { type: "date", required: false },
    tags: {
      type: 'list',
      of: Tag,
      required: true
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/pages\/?/, ""),
    },
    edit_url: {
      type: "string",
      resolve: (doc) =>
        `https://github.com/iamnbutler/data/edit/main/post/${doc._raw.sourceFileName}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "data/post",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkParse,
      remarkGfm,
      remarkStringify,
      remarkPrism,
      remarkHtml,
    ],
  },
})
