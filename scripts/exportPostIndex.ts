import path from "path"
import fs from "fs"
import * as json from "../.contentlayer/generated/Post/_index.json"

const filePath = path.join(__dirname, "../public/index.json")
const baseURL = "https://nate.rip/posts"

interface Post {
  title: string
  url: string
  body: string
}

export default function exportPostIndex() {
  let index = []
  let item: Post = {
    title: "",
    url: "",
    body: "",
  }

  json.map(
    (post) => (
      (item.title = post.title),
      (item.url = `${baseURL}/${post.slug}`),
      (item.body = post.body.raw),
      index.push(index, item)
    )
  )

  fs.writeFileSync(filePath, JSON.stringify(index, null, 2))
  console.log("Generated Index.")
}
