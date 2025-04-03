import B2 from "backblaze-b2";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

class B2Client {
  constructor() {
    this.b2 = new B2({
      applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
      applicationKey: process.env.B2_APPLICATION_KEY,
    });
    this.bucketName = process.env.B2_BUCKET_NAME;
    this.bucketId = null;
    this.endpoint = process.env.B2_ENDPOINT;
  }

  async init() {
    try {
      console.log("Authorizing with Backblaze B2...");
      console.log(`Using key ID: ${process.env.B2_APPLICATION_KEY_ID}`);
      console.log(`Using bucket name: ${this.bucketName}`);

      await this.b2.authorize();
      console.log("Authorization successful");

      console.log("Getting bucket info...");
      const response = await this.b2.getBucket({ bucketName: this.bucketName });

      if (!response.data.buckets || response.data.buckets.length === 0) {
        throw new Error(
          `Bucket ${this.bucketName} not found. Available buckets: ${
            response.data.buckets
              ? response.data.buckets.map((b) => b.bucketName).join(", ")
              : "none"
          }`,
        );
      }

      this.bucketId = response.data.buckets[0]?.bucketId;
      console.log(`Found bucket: ${this.bucketName} (ID: ${this.bucketId})`);

      return this;
    } catch (error) {
      console.error("B2 initialization error:", error.message);
      if (error.response) {
        console.error("Error details:", {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
        });
      }
      throw error;
    }
  }

  async uploadFile(localFilePath, remoteFilePath) {
    try {
      // Get upload URL
      const uploadUrlResponse = await this.b2.getUploadUrl({
        bucketId: this.bucketId,
      });

      const uploadUrl = uploadUrlResponse.data.uploadUrl;
      const authToken = uploadUrlResponse.data.authorizationToken;

      // Read file
      const fileData = fs.readFileSync(localFilePath);
      const fileName = remoteFilePath.startsWith("/")
        ? remoteFilePath.substring(1)
        : remoteFilePath;

      // Get file mime type
      const mimeType = this._getMimeType(localFilePath);

      // Upload file
      const uploadResponse = await this.b2.uploadFile({
        uploadUrl,
        uploadAuthToken: authToken,
        fileName,
        data: fileData,
        contentType: mimeType,
      });

      const fileUrl = `${this.endpoint}/file/${this.bucketName}/${fileName}`;

      return {
        success: true,
        fileId: uploadResponse.data.fileId,
        fileName: uploadResponse.data.fileName,
        url: fileUrl,
      };
    } catch (error) {
      console.error(`Error uploading ${localFilePath}:`, error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async listFiles(prefix = "") {
    try {
      const response = await this.b2.listFileNames({
        bucketId: this.bucketId,
        prefix: prefix,
        maxFileCount: 1000,
      });

      return response.data.files;
    } catch (error) {
      console.error("Error listing files:", error.message);
      throw error;
    }
  }

  _getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
      ".mp4": "video/mp4",
      ".webm": "video/webm",
      ".mov": "video/quicktime",
      ".pdf": "application/pdf",
    };

    return mimeTypes[ext] || "application/octet-stream";
  }

  getPublicUrl(fileName) {
    // Ensure fileName doesn't start with a slash for B2 paths
    const b2FileName = fileName.startsWith("/")
      ? fileName.substring(1)
      : fileName;
    return `${this.endpoint}/file/${this.bucketName}/${b2FileName}`;
  }
}

export default B2Client;
