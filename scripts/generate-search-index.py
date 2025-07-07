import json
import os
import re
from typing import Dict, List

def extract_frontmatter_and_body(content: str) -> tuple[Dict[str, str], str]:
    """Extract frontmatter metadata and body from markdown content."""
    metadata = {}
    body = content

    match = re.search(r'^---\s+(.*?)\s+---\s*(.*)', content, re.DOTALL)
    if match:
        front_matter = match.group(1)
        body = match.group(2)

        # Parse frontmatter
        for line in front_matter.splitlines():
            if ': ' in line:
                key, value = line.split(': ', 1)
                metadata[key.strip()] = value.strip().strip('"').strip("'")

    return metadata, body

def clean_body_text(body: str) -> str:
    """Remove markdown formatting and clean up body text."""
    # Remove code blocks
    body = re.sub(r'```[\s\S]*?```', '', body)

    # Remove images
    body = re.sub(r'!\[.*?\]\(.*?\)', '', body)

    # Remove links but keep text
    body = re.sub(r'\[([^\]]+)\]\(.*?\)', r'\1', body)

    # Remove headers
    body = re.sub(r'#{1,6}\s+', '', body)

    # Remove bold and italic
    body = re.sub(r'\*\*([^*]+)\*\*', r'\1', body)
    body = re.sub(r'\*([^*]+)\*', r'\1', body)
    body = re.sub(r'_([^_]+)_', r'\1', body)

    # Remove inline code
    body = re.sub(r'`([^`]+)`', r'\1', body)

    # Remove list markers
    body = re.sub(r'^\s*[-*+]\s+', '', body, flags=re.MULTILINE)
    body = re.sub(r'^\s*\d+\.\s+', '', body, flags=re.MULTILINE)

    # Clean up whitespace
    body = re.sub(r'\n{3,}', '\n\n', body)
    body = body.strip()

    return body

def process_content_directory(content_type: str, src_folder: str) -> List[Dict[str, str]]:
    """Process a content directory and extract search data."""
    items = []
    content_dir = os.path.join(src_folder, 'content', content_type)

    if not os.path.exists(content_dir):
        return items

    for root, dirs, files in os.walk(content_dir):
        for file in files:
            if file.endswith('.md') or file.endswith('.mdx'):
                filepath = os.path.join(root, file)

                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        metadata, body = extract_frontmatter_and_body(content)

                        # Skip drafts
                        if metadata.get('draft', '').lower() == 'true':
                            continue

                        # Clean up the body text
                        clean_body = clean_body_text(body)

                        # Get the slug - handle both regular files and index.md
                        relative_path = os.path.relpath(filepath, content_dir)
                        if file == 'index.md' or file == 'index.mdx':
                            # For index files, use the parent directory name as slug
                            slug = os.path.dirname(relative_path)
                        else:
                            # For regular files, remove the extension
                            slug = os.path.splitext(relative_path)[0]

                        # Skip if slug is empty or just '.'
                        if not slug or slug == '.':
                            continue

                        # Construct the URL based on content type
                        url = f"/{content_type}/{slug}"

                        # Get title and description
                        title = metadata.get('title', 'Untitled')
                        description = metadata.get('description', '')

                        # Combine description and body for search
                        search_body = f"{description} {clean_body}" if description else clean_body

                        items.append({
                            'title': title,
                            'url': url,
                            'body': search_body
                        })

                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

    return items

def create_search_index(src_folder: str, output_file: str) -> None:
    """Create search index for all content types."""
    all_items = []

    # Process each content type
    content_types = ['blog', 'projects', 'lists', 'shots']

    for content_type in content_types:
        items = process_content_directory(content_type, src_folder)
        all_items.extend(items)
        print(f"Found {len(items)} items in {content_type}")

    # Sort by title for consistent output
    all_items.sort(key=lambda x: x['title'])

    # Write to JSON file
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_items, f, indent=2, ensure_ascii=False)

    print(f"\nTotal items indexed: {len(all_items)}")
    print(f"Search index written to: {output_file}")

if __name__ == '__main__':
    # Get the project root directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    src_folder = os.path.join(project_root, 'src')

    # Output to public directory so it's available in the build
    output_file = os.path.join(project_root, 'public', 'search-index.json')

    create_search_index(src_folder, output_file)
