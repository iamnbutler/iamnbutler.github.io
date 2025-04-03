import mediaMap from "../b2MediaMap.json";

/**
 * Get the B2 URL for a media file based on its relative path in the content directory
 * Falls back to local path if not found in B2
 *
 * @param {string} relativePath - Path relative to the content directory
 * @returns {string} URL to the media file (B2 or local)
 */
export function getMediaUrl(relativePath) {
  // Clean up the path if needed
  const cleanPath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath;

  try {
    // Check if the file exists in the B2 media map
    const fileInfo = mediaMap.files[cleanPath];

    if (fileInfo && fileInfo.url) {
      return fileInfo.url;
    }

    // Fall back to local path
    return `/src/content/${cleanPath}`;
  } catch (error) {
    console.error(`Error getting media URL for ${relativePath}:`, error);
    return `/src/content/${cleanPath}`;
  }
}

/**
 * Create an image component with B2 URL
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Source path relative to content directory
 * @param {string} props.alt - Alt text for the image
 * @param {Object} props.attributes - Additional HTML attributes
 * @returns {Object} Image component props with B2 URL
 */
export function B2Image({ src, alt, ...attributes }) {
  const imageUrl = getMediaUrl(src);

  return {
    src: imageUrl,
    alt,
    ...attributes,
  };
}
