/**
 * Astro integration for Backblaze B2 asset handling
 * 
 * This integration transforms local asset URLs to Backblaze B2 URLs in production
 * while keeping them as local references during development.
 */

export default function createB2Integration() {
  return {
    name: "backblaze-b2-assets",
    hooks: {
      "astro:config:setup": ({ updateConfig, config, command }) => {
        const isProduction = command === "build";
        
        // Only apply in production builds
        if (!isProduction) {
          return;
        }
        
        // Get B2 configuration from environment variables
        const {
          B2_ENDPOINT,
          B2_BUCKET_NAME
        } = process.env;
        
        if (!B2_ENDPOINT || !B2_BUCKET_NAME) {
          console.warn("B2 environment variables not found. Assets will be served locally.");
          return;
        }
        
        // Base URL for B2 assets
        const b2BaseUrl = `${B2_ENDPOINT}/file/${B2_BUCKET_NAME}`;
        
        // Update markdown plugin to transform image URLs
        updateConfig({
          markdown: {
            ...config.markdown,
            remarkPlugins: [
              ...(config.markdown.remarkPlugins || []),
              () => (tree) => {
                // Transform image URLs in markdown
                import("unist-util-visit").then(({ visit }) => {
                  visit(tree, "image", (node) => {
                    // Only transform relative URLs (not external ones)
                    if (node.url && !node.url.startsWith("http") && !node.url.startsWith("/")) {
                      // Convert relative paths to B2 URLs
                      node.url = `${b2BaseUrl}/${node.url}`;
                    } else if (node.url && node.url.startsWith("/")) {
                      // Convert absolute paths to B2 URLs
                      node.url = `${b2BaseUrl}${node.url}`;
                    }
                  });
                });
              }
            ],
            rehypePlugins: [
              ...(config.markdown.rehypePlugins || []),
              () => (tree) => {
                // Transform image URLs in HTML
                import("unist-util-visit").then(({ visit }) => {
                  visit(tree, { tagName: "img" }, (node) => {
                    if (node.properties && node.properties.src && 
                        !node.properties.src.startsWith("http") && 
                        !node.properties.src.startsWith("data:")) {
                      
                      if (node.properties.src.startsWith("/")) {
                        // Convert absolute paths to B2 URLs
                        node.properties.src = `${b2BaseUrl}${node.properties.src}`;
                      } else {
                        // Convert relative paths to B2 URLs
                        node.properties.src = `${b2BaseUrl}/${node.properties.src}`;
                      }
                    }
                  });
                });
              }
            ]
          }
        });
      }
    }
  };
}