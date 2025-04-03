#!/usr/bin/env node

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { glob } from "glob";
import B2Client from "./b2Client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
const contentDir = path.join(rootDir, "src/content");
const mappingFilePath = path.join(rootDir, "src/b2MediaMap.json");

// Media file extensions to look for
const mediaExtensions = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".mp4",
  ".webm",
  ".mov",
  ".mp3",
  ".wav",
];

// Init B2 client
async function init() {
  try {
    const b2Client = await new B2Client().init();
    return b2Client;
  } catch (error) {
    console.error("Failed to initialize B2 client:", error.message);
    process.exit(1);
  }
}

// Find all media files in the content directory
async function findMediaFiles() {
  try {
    const pattern = `${contentDir}/**/*`;
    const allFiles = await glob(pattern, { nodir: true });

    return allFiles.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return mediaExtensions.includes(ext);
    });
  } catch (error) {
    console.error("Error finding media files:", error.message);
    return [];
  }
}

// Load existing media map if available
function loadExistingMediaMap() {
  try {
    if (fs.existsSync(mappingFilePath)) {
      const data = fs.readFileSync(mappingFilePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading existing media map:", error.message);
  }

  return { files: {} };
}

// Save media mapping to file
function saveMediaMap(mediaMap) {
  try {
    const dirPath = path.dirname(mappingFilePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(mappingFilePath, JSON.stringify(mediaMap, null, 2));
    console.log(`Media mapping saved to ${mappingFilePath}`);
  } catch (error) {
    console.error("Error saving media map:", error.message);
  }
}

// Main function
async function main() {
  console.log("Initializing B2 client...");
  const b2Client = await init();

  console.log("Finding media files...");
  const mediaFiles = await findMediaFiles();
  console.log(`Found ${mediaFiles.length} media files`);

  const mediaMap = loadExistingMediaMap();
  const existingFiles = mediaMap.files || {};
  let uploadCount = 0;
  let skipCount = 0;

  for (const filePath of mediaFiles) {
    // Get relative path from content dir
    const relativePath = path.relative(contentDir, filePath);

    // Skip if already uploaded and file hasn't changed
    const fileStats = fs.statSync(filePath);
    const modTime = fileStats.mtime.getTime();

    if (
      existingFiles[relativePath] &&
      existingFiles[relativePath].modTime === modTime
    ) {
      console.log(`Skipping unchanged file: ${relativePath}`);
      skipCount++;
      continue;
    }

    // Upload to B2 with the same relative path
    console.log(`Uploading: ${relativePath}`);
    const remoteFilePath = `content/${relativePath}`;
    const result = await b2Client.uploadFile(filePath, remoteFilePath);

    if (result.success) {
      // Update mapping
      existingFiles[relativePath] = {
        url: result.url,
        fileId: result.fileId,
        modTime: modTime,
      };

      uploadCount++;
      console.log(`Uploaded: ${relativePath} -> ${result.url}`);
    } else {
      console.error(`Failed to upload ${relativePath}: ${result.error}`);
    }
  }

  // Save updated media map
  mediaMap.files = existingFiles;
  mediaMap.lastUpdated = new Date().toISOString();
  saveMediaMap(mediaMap);

  console.log(`\nUpload summary:`);
  console.log(`- Total media files: ${mediaFiles.length}`);
  console.log(`- Uploaded: ${uploadCount}`);
  console.log(`- Skipped (unchanged): ${skipCount}`);
  console.log(`- Failed: ${mediaFiles.length - uploadCount - skipCount}`);
}

main().catch((error) => {
  console.error("Unhandled error:", error);
  process.exit(1);
});
