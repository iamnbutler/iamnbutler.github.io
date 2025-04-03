import mediaMap from "../b2MediaMap.json";

/**
 * Fix B2 server URLs by replacing problematic f000 prefix with f005 which is known to work
 *
 * @param {string} url - The B2 URL to fix
 * @returns {string} - Fixed URL
 */
function fixB2Url(url) {
  if (url && url.includes("f000.backblazeb2.com")) {
    return url.replace("f000.backblazeb2.com", "f005.backblazeb2.com");
  }
  return url;
}

/**
 * Get the URL for a media file based on its relative path in the content directory
 * Uses hosted storage (B2) only, no fallback
 *
 * @param {string} relativePath - Path relative to the content directory
 * @returns {string} URL to the media file from B2, or empty string if not found
 */
export function getHostedMediaUrl(relativePath) {
  // Clean up the path if needed
  const cleanPath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath;

  try {
    // Check if the file exists in the media map
    const fileInfo = mediaMap.files[cleanPath];

    if (fileInfo && fileInfo.url) {
      return fixB2Url(fileInfo.url);
    }

    // No fallback - if not in B2, return empty or a placeholder
    console.warn(`Media file not found in B2: ${relativePath}`);
    return ""; // Empty string so component can handle this case
  } catch (error) {
    console.error(`Error getting media URL for ${relativePath}:`, error);
    return "";
  }
}

/**
 * Create an image component with hosted media URL
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Source path relative to content directory
 * @param {string} props.alt - Alt text for the image
 * @param {Object} props.attributes - Additional HTML attributes
 * @returns {Object} Image component props with hosted URL
 */
export function HostedImage({ src, alt, ...attributes }) {
  const imageUrl = getHostedMediaUrl(src);
  
  if (!imageUrl) {
    console.warn(`No B2 hosted image available for: ${src}`);
    // You could return null or a placeholder image here
  }

  return {
    src: imageUrl || "", // Empty string or placeholder if not found
    alt,
    ...attributes,
  };
}

// Keep the old function names for backward compatibility
export const getMediaUrl = getHostedMediaUrl;
export const B2Image = HostedImage;

