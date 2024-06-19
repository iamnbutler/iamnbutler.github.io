import json
import os
import re
from typing import Dict, List

def create_slug_from_filename(filename: str) -> str:
    return re.sub(r'^\d+[-_]', '', filename).rsplit('.', 1)[0]

def extract_metadata(content: str) -> Dict[str, str]:
    metadata = {}
    match = re.search(r'^---\s+(.*?)\s+---', content, re.DOTALL)
    if match:
        front_matter = match.group(1)
        for line in front_matter.splitlines():
            key, value = line.split(': ', 1)
            metadata[key.strip()] = value.strip().strip('"').strip("'")
    return metadata

def create_content_index(src_folder: str) -> None:
    index: List[Dict[str, str]] = []
    for root, dirs, files in os.walk(src_folder):
        print(f'Walking through: {root}')
        if 'fragment' not in root:
            continue
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                print(f'Processing file: {filepath}')
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    metadata = extract_metadata(content)
                    slug = create_slug_from_filename(file)
                    index.append({
                        'title': metadata.get('title', 'No Title'),
                        'url': f'/f/{slug}',
                        'body': metadata.get('preview', 'No Preview'),
                        'date_published': metadata.get('date_published', 'No Date Published'),
                        'tags': json.loads(metadata.get('tags', '[]')),
                        'set': metadata.get('set', 'No Set'),
                    })

    print(f'Final index: {index}')
    with open('index/content.json', 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=4)

create_content_index('src/content')
