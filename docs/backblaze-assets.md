# Backblaze B2 Asset Handling

This project uses Backblaze B2 for serving assets in production. Assets are automatically uploaded to B2 during the build process, allowing for colocation of assets with markdown content without having to manually upload them.

## How It Works

### 1. Asset Upload Script

The `scripts/upload-assets.js` script:
- Scans content directories and `public` folder for assets (images, videos, PDFs, etc.)
- Uses file hashing to only upload changed assets
- Preserves the directory structure when uploading to B2
- Runs automatically during the build process

### 2. Astro Integration

The `src/integrations/backblaze-assets.js` integration:
- Transforms image URLs in markdown content to point to Backblaze B2 in production
- Keeps local references during development for a seamless experience
- Works with both inline images (`![alt](image.jpg)`) and HTML images (`<img src="image.jpg">`)

## Usage

### In Markdown Content

```markdown
# My Blog Post

![Image description](./image.jpg)

Or using an absolute path from the project root:

![Another image](/public/image.jpg)
```

Both relative and absolute paths will be automatically transformed to B2 URLs in production.

### Local Development

During local development (`npm run dev`), assets are served from the local filesystem as usual.

### Production Build

When running `npm run build`:

1. Astro builds the site
2. The upload script finds and uploads assets to B2
3. URLs in content are transformed to point to B2

## Environment Variables

The following environment variables are required:

```
B2_APPLICATION_KEY_ID=application_key_id
B2_APPLICATION_KEY=application_secret_key
B2_BUCKET_NAME=bucket_name
B2_ENDPOINT=b2_endpoint
```

## Cache File

A `.b2-cache.json` file is created in the project root to track uploaded assets and avoid re-uploading unchanged files.
