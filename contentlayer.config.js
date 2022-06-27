import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import remarkPrism from "remark-prism"
import remarkStringify from "remark-stringify"

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "post/**/*.md",
  contentType: "mdx",
  fields: {
    uuid: { type: "string", required: true },
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    status: { type: "string", required: true },
    date_created: { type: "date", required: true },
    date_modified: { type: "date", required: false },
  }
}))

export default makeSource({
  contentDirPath: "data",
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
