import "dotenv/config";
import B2 from "backblaze-b2";

import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// Asset file extensions to look for
const ASSET_EXTENSIONS = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".mp4",
  ".webm",
  ".mp3",
  ".wav",
  ".ogg",
  ".pdf",
  ".zip",
  ".ttf",
  ".woff",
  ".woff2",
];

// Location of the cache file
const CACHE_FILE = path.join(projectRoot, ".b2-cache.json");

// Create B2 client
const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY,
});

// Load or create hash cache
async function getHashCache() {
  try {
    const data = await fs.readFile(CACHE_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is invalid, start with empty cache
    return {};
  }
}

// Save hash cache
async function saveHashCache(cache) {
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
}

// Calculate SHA1 hash of a file
async function calculateFileHash(filePath) {
  const fileBuffer = await fs.readFile(filePath);
  const hashSum = crypto.createHash("sha1");
  hashSum.update(fileBuffer);
  return hashSum.digest("hex");
}

// Check if a file needs to be uploaded by comparing hash
async function shouldUploadFile(filePath, hashCache) {
  const relativePath = path.relative(projectRoot, filePath);
  const hash = await calculateFileHash(filePath);

  // If file hash already in cache and matches, skip upload
  if (hashCache[relativePath] && hashCache[relativePath] === hash) {
    return false;
  }

  // Update cache with latest hash
  hashCache[relativePath] = hash;
  return true;
}

// Walk directories recursively and find asset files
async function findAssets(dirPath, assetList = []) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules and hidden directories
      if (entry.name === "node_modules" || entry.name.startsWith(".")) {
        continue;
      }
      await findAssets(entryPath, assetList);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ASSET_EXTENSIONS.includes(ext)) {
        assetList.push(entryPath);
      }
    }
  }

  return assetList;
}

// Main function
async function uploadAssets() {
  try {
    console.log("Starting asset upload to Backblaze B2...");

    // Authenticate with B2
    await b2.authorize();

    // instead of b2.listBuckets(), do:
    const resp = await b2.listBuckets({
      bucketName: process.env.B2_BUCKET_NAME,
    });
    const bucketId = resp.data.buckets[0].bucketId;

    if (!bucketId) {
      throw new Error(`Bucket ${process.env.B2_BUCKET_NAME} not found`);
    }

    // Load hash cache
    const hashCache = await getHashCache();

    // Find all assets in content, assets, and public directories
    const contentDir = path.join(projectRoot, "src", "content");
    const assetsDir = path.join(projectRoot, "src", "assets");
    const publicDir = path.join(projectRoot, "public");

    console.log("Finding assets in content directory...");
    const contentAssets = await findAssets(contentDir);

    console.log("Finding assets in src/assets directory...");
    const srcAssets = await findAssets(assetsDir);

    console.log("Finding assets in public directory...");
    const publicAssets = await findAssets(publicDir);

    const allAssets = [...contentAssets, ...srcAssets, ...publicAssets];
    console.log(`Found ${allAssets.length} assets to process`);

    // Upload assets that have changed
    let uploadedCount = 0;
    let skippedCount = 0;

    for (const asset of allAssets) {
      // Determine if file needs uploading based on hash cache
      const needsUpload = await shouldUploadFile(asset, hashCache);

      if (!needsUpload) {
        skippedCount++;
        continue;
      }

      // Generate B2 file name (preserve relative path from project root)
      const relativePath = path.relative(projectRoot, asset);
      const b2FileName = relativePath.replace(/\\/g, "/"); // Ensure forward slashes for B2

      // Get file content for upload
      const fileBuffer = await fs.readFile(asset);

      // Determine content type based on extension
      const ext = path.extname(asset).toLowerCase();
      let contentType = "application/octet-stream"; // Default content type

      if (ext === ".png") contentType = "image/png";
      else if ([".jpg", ".jpeg"].includes(ext)) contentType = "image/jpeg";
      else if (ext === ".gif") contentType = "image/gif";
      else if (ext === ".svg") contentType = "image/svg+xml";
      else if (ext === ".webp") contentType = "image/webp";
      else if (ext === ".mp4") contentType = "video/mp4";
      else if (ext === ".webm") contentType = "video/webm";
      else if (ext === ".mp3") contentType = "audio/mpeg";
      else if (ext === ".wav") contentType = "audio/wav";
      else if (ext === ".ogg") contentType = "audio/ogg";
      else if (ext === ".pdf") contentType = "application/pdf";
      else if (ext === ".zip") contentType = "application/zip";
      else if ([".ttf", ".woff", ".woff2"].includes(ext))
        contentType = "font/" + ext.substring(1);

      // Get upload URL
      const uploadUrlResponse = await b2.getUploadUrl({
        bucketId: bucketId,
      });

      // Upload file
      try {
        await b2.uploadFile({
          uploadUrl: uploadUrlResponse.data.uploadUrl,
          uploadAuthToken: uploadUrlResponse.data.authorizationToken,
          fileName: b2FileName,
          data: fileBuffer,
          contentType: contentType,
        });

        console.log(`Uploaded: ${b2FileName}`);
        uploadedCount++;
      } catch (error) {
        console.error(`Error uploading ${b2FileName}:`, error.message);
      }
    }

    // Save updated hash cache
    await saveHashCache(hashCache);

    console.log(
      `Asset upload complete: ${uploadedCount} uploaded, ${skippedCount} unchanged`,
    );
    console.log(
      `B2 endpoint: ${process.env.B2_ENDPOINT}/file/${process.env.B2_BUCKET_NAME}/`,
    );
  } catch (error) {
    console.error("Error in asset upload process:", error);
    process.exit(1);
  }
}

// Execute if run directly
uploadAssets();
