import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';
import json from "../.contentlayer/generated/Post/_index.json" assert { type: 'json' }

// Construct __dirname since it is not available in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, "../public/post_index.json")
const baseURL = "https://nate.rip/posts"

// TODO: Do this in a better way
json.map(
  (item) => (
    item.body = item.body.raw,
    delete item.status,
    delete item.body.code,
    delete item.body.raw,
    delete item._id,
    delete item._raw,
    delete item.type,
    delete item.url,
    delete item.edit_url
  )
)

console.log(json)

fs.writeFileSync(outputPath, JSON.stringify(json, null, 2))
console.log("Generated Index.")
