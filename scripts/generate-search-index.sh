#!/bin/bash

# generate-search-index.sh
# Generates a JSON search index for tinysearch from markdown content

set -e

# Get the script directory and project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( dirname "$SCRIPT_DIR" )"
CONTENT_DIR="$PROJECT_ROOT/src/content"
OUTPUT_FILE="$PROJECT_ROOT/public/search-index.json"

# Create public directory if it doesn't exist
mkdir -p "$PROJECT_ROOT/public"

# Function to extract frontmatter value
extract_frontmatter_value() {
    local file="$1"
    local key="$2"

    # Extract frontmatter section
    local frontmatter=$(sed -n '/^---$/,/^---$/p' "$file" | sed '1d;$d')

    # Extract the value for the key
    local value=$(echo "$frontmatter" | grep "^$key:" | sed "s/^$key: *//" | sed 's/^["'"'"']//' | sed 's/["'"'"']$//')

    echo "$value"
}

# Function to clean markdown body
clean_body() {
    local file="$1"

    # Extract body (everything after second ---)
    local body=$(sed '1,/^---$/d; 1,/^---$/d' "$file")

    # Clean markdown formatting
    echo "$body" | \
        sed 's/```[^`]*```//g' | \
        sed 's/!\[.*\]([^)]*)/[image]/g' | \
        sed 's/\[\([^]]*\)\]([^)]*)/\1/g' | \
        sed 's/^#\{1,6\} //g' | \
        sed 's/\*\*\([^*]*\)\*\*/\1/g' | \
        sed 's/\*\([^*]*\)\*/\1/g' | \
        sed 's/_\([^_]*\)_/\1/g' | \
        sed 's/`\([^`]*\)`/\1/g' | \
        sed 's/^[[:space:]]*[-*+] //g' | \
        sed 's/^[[:space:]]*[0-9]\+\. //g' | \
        tr '\n' ' ' | \
        sed 's/[[:space:]]\+/ /g' | \
        sed 's/^ //' | \
        sed 's/ $//'
}

# Function to escape JSON string
json_escape() {
    local string="$1"
    echo "$string" | sed 's/\\/\\\\/g' | sed 's/"/\\"/g' | sed 's/	/\\t/g' | tr '\n' ' ' | tr '\r' ' '
}

# Start JSON array
echo "[" > "$OUTPUT_FILE"

first_item=true
item_count=0

# Process each content type
for content_type in blog projects lists shots; do
    content_type_dir="$CONTENT_DIR/$content_type"

    if [ ! -d "$content_type_dir" ]; then
        continue
    fi

    echo "Processing $content_type..."

    # Find all .md and .mdx files
    while IFS= read -r -d '' file; do
        # Extract metadata
        title=$(extract_frontmatter_value "$file" "title")
        draft=$(extract_frontmatter_value "$file" "draft")
        description=$(extract_frontmatter_value "$file" "description")

        # Skip drafts
        if [ "$draft" = "true" ]; then
            continue
        fi

        # Skip if no title
        if [ -z "$title" ]; then
            continue
        fi

        # Get slug
        relative_path="${file#$content_type_dir/}"
        filename=$(basename "$file")

        if [ "$filename" = "index.md" ] || [ "$filename" = "index.mdx" ]; then
            # For index files, use parent directory as slug
            slug=$(dirname "$relative_path")
            if [ "$slug" = "." ]; then
                continue
            fi
        else
            # For regular files, remove extension
            slug="${relative_path%.*}"
        fi

        # Construct URL
        url="/$content_type/$slug"

        # Clean body text
        body=$(clean_body "$file")

        # Combine description and body for search
        if [ -n "$description" ]; then
            search_body="$description $body"
        else
            search_body="$body"
        fi

        # Escape values for JSON
        title_escaped=$(json_escape "$title")
        url_escaped=$(json_escape "$url")
        body_escaped=$(json_escape "$search_body")

        # Add comma if not first item
        if [ "$first_item" = false ]; then
            echo "," >> "$OUTPUT_FILE"
        else
            first_item=false
        fi

        # Write JSON object (without newline)
        printf '  {
    "title": "%s",
    "url": "%s",
    "body": "%s"
  }' "$title_escaped" "$url_escaped" "$body_escaped" >> "$OUTPUT_FILE"

        ((item_count++))

    done < <(find "$content_type_dir" -type f \( -name "*.md" -o -name "*.mdx" \) -print0)

    echo "Found $(find "$content_type_dir" -type f \( -name "*.md" -o -name "*.mdx" \) | wc -l) items in $content_type"
done

# Close JSON array
echo "" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo ""
echo "Total items indexed: $item_count"
echo "Search index written to: $OUTPUT_FILE"
