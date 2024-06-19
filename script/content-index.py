import os
import json

CONTENT_DIR = 'src/content'
OUTPUT_PATH = 'index/content.json'
FRAGMENT_DIR = 'fragment'
FRAGMENT_SET_DIR = 'fragmentSet'

def get_file_content(file_path):
    with open(file_path, 'r') as file:
        return file.read()

def parse_value(value):
    """Manually parse the value to handle common types."""
    value = value.strip()

    # Handle boolean
    if value.lower() == 'true':
        return True
    elif value.lower() == 'false':
        return False

    # Handle null
    if value.lower() == 'null':
        return None

    # Handle numbers
    try:
        if '.' in value:
            return float(value)
        else:
            return int(value)
    except ValueError:
        pass

    # Handle arrays
    if value.startswith('[') and value.endswith(']'):
        return json.loads(value)

    # Fallback to string (stripping quotes if any)
    return value.strip('"').strip("'")

def parse_frontmatter(content):
    """Manually parse the YAML front matter from a Markdown content string."""
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1].strip()
            yaml_dict = {}
            for line in frontmatter.splitlines():
                if ':' in line:
                    key, value = line.split(':', 1)
                    yaml_dict[key.strip()] = parse_value(value)
            return yaml_dict
    return None

def parse_fragment(file_path):
    content = get_file_content(file_path)
    metadata = parse_frontmatter(content)
    if metadata:
        # Add slug from filename
        slug = os.path.splitext(os.path.basename(file_path))[0]
        metadata['slug'] = slug
        # Generate correct URL
        metadata['url'] = f"/f/{slug}"
        # Ensure set is None if not present or empty
        set_value = metadata.get('set', None) or None
        metadata['set'] = set_value
        # If 'preview' exists, rename to 'body'
        if 'preview' in metadata:
            metadata['body'] = metadata.pop('preview')
        return metadata
    return None

def process_directory(content_dir):
    fragments = []
    for dirpath, dirnames, filenames in os.walk(content_dir):
        if FRAGMENT_SET_DIR in dirpath:  # Skip fragmentSet directory
            continue
        if FRAGMENT_DIR in dirpath:
            for filename in filenames:
                if not filename.endswith('.md'):  # Process only Markdown files
                    continue
                file_path = os.path.join(dirpath, filename)
                fragment = parse_fragment(file_path)
                if fragment:
                    fragments.append(fragment)
    return fragments

def order_fragment(fragment):
    """Ensure the fields are ordered as specified."""
    ordered_keys = ['slug', 'title', 'date_published', 'url', 'set', 'body', 'tags', 'kind']
    return {key: fragment.get(key) for key in ordered_keys}

def main():
    content_path = os.path.join(CONTENT_DIR, FRAGMENT_DIR)
    fragments = process_directory(content_path)
    # Order fragments accordingly
    ordered_fragments = [order_fragment(fragment) for fragment in fragments]

    # Write the ordered fragments to the output JSON
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, 'w') as output_file:
        json.dump(ordered_fragments, output_file, indent=4)

    print(f"Content index generated at {OUTPUT_PATH}")

if __name__ == '__main__':
    main()
