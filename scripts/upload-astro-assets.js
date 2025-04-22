import "dotenv/config";
import B2 from "backblaze-b2";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const ASTRO_ASSETS_DIR = path.join(projectRoot, "dist", "_astro");

const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY,
});

async function uploadAstroAssets() {
  try {
    console.log("Starting Astro assets upload to Backblaze B2...");

    await b2.authorize();

    const resp = await b2.listBuckets({
      bucketName: process.env.B2_BUCKET_NAME,
    });
    const bucketId = resp.data.buckets[0].bucketId;

    if (!bucketId) {
      throw new Error(`Bucket ${process.env.B2_BUCKET_NAME} not found`);
    }

    // Get all files in the Astro assets directory
    const astroAssets = await getAllFiles(ASTRO_ASSETS_DIR);
    console.log(`Found ${astroAssets.length} optimized Astro assets to upload`);

    let uploadCount = 0;

    for (const assetPath of astroAssets) {
      // Create a relative path for B2
      const relativePath = path.relative(projectRoot, assetPath);
      const b2Path = relativePath.replace(/\\/g, "/");

      // Read the file
      const fileBuffer = await fs.readFile(assetPath);

      // Determine the content type
      const ext = path.extname(assetPath).toLowerCase();
      let contentType = determineContentType(ext);

      // Get upload URL
      const uploadUrlResponse = await b2.getUploadUrl({
        bucketId: bucketId,
      });

      try {
        // Upload the file to B2
        await b2.uploadFile({
          uploadUrl: uploadUrlResponse.data.uploadUrl,
          uploadAuthToken: uploadUrlResponse.data.authorizationToken,
          fileName: b2Path,
          data: fileBuffer,
          contentType: contentType,
        });

        console.log(`Uploaded: ${b2Path}`);
        uploadCount++;
      } catch (error) {
        console.error(`Error uploading ${b2Path}:`, error.message);
      }
    }

    console.log(`Astro assets upload complete: ${uploadCount} uploaded`);
    console.log(
      `B2 endpoint: ${process.env.B2_ENDPOINT}/file/${process.env.B2_BUCKET_NAME}/`,
    );
  } catch (error) {
    console.error("Error in Astro assets upload process:", error);
    process.exit(1);
  }
}

// Helper function to get all files in a directory recursively
async function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);

      if (file.isDirectory()) {
        arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    }
  } catch (error) {
    console.warn(`Could not read directory ${dirPath}: ${error.message}`);
  }

  return arrayOfFiles;
}

// Helper function to determine content type based on file extension
function determineContentType(ext) {
  const contentTypeMap = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mp3": "audio/mpeg",
    ".wav": "audio/wav",
    ".ogg": "audio/ogg",
    ".pdf": "application/pdf",
    ".zip": "application/zip",
    ".ttf": "font/ttf",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".js": "application/javascript",
    ".mjs": "application/javascript",
    ".css": "text/css",
  };

  return contentTypeMap[ext] || "application/octet-stream";
}

uploadAstroAssets();
