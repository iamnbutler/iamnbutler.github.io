import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: false },
    date: { type: 'date', required: false },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
})
