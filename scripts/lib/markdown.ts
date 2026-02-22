/**
 * Shared markdown utilities for upload scripts.
 */

/**
 * Strip markdown formatting to produce plaintext for textContent field.
 * The site.standard spec says textContent "Should not contain markdown or other formatting."
 */
export function stripMarkdown(md: string): string {
  return md
    // Remove images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    // Remove links, keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}$/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Collapse multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Create a content union entry for markdown content.
 * Uses a custom type since site.standard.document has an open content union.
 */
export function markdownContent(text: string): { $type: string; text: string } {
  return {
    $type: 'rip.nate.content.markdown',
    text,
  };
}
