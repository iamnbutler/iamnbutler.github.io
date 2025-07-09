#!/bin/bash

# generate-word-index.sh
# Generates a word index for partial/fuzzy search support

set -e

# Get the script directory and project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( dirname "$SCRIPT_DIR" )"
CONTENT_DIR="$PROJECT_ROOT/src/content"
OUTPUT_FILE="$PROJECT_ROOT/public/word-index.json"

# Create public directory if it doesn't exist
mkdir -p "$PROJECT_ROOT/public"

# Temporary file for collecting words
TEMP_WORDS=$(mktemp)

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

# Function to extract words from text
extract_words() {
    local text="$1"

    # Convert to lowercase, replace non-alphanumeric with spaces, split into words
    echo "$text" | \
        tr '[:upper:]' '[:lower:]' | \
        sed 's/[^a-z0-9]/ /g' | \
        tr -s ' ' '\n' | \
        grep -v '^$' | \
        grep -v '^[0-9]*$' | \
        awk 'length($0) > 2'
}

# Process each content type
for content_type in blog projects lists shots; do
    content_type_dir="$CONTENT_DIR/$content_type"

    if [ ! -d "$content_type_dir" ]; then
        continue
    fi

    echo "Processing $content_type for words..."

    # Find all .md and .mdx files
    while IFS= read -r -d '' file; do
        # Extract metadata
        title=$(extract_frontmatter_value "$file" "title")
        draft=$(extract_frontmatter_value "$file" "draft")
        description=$(extract_frontmatter_value "$file" "description")
        tags=$(extract_frontmatter_value "$file" "tags")

        # Skip drafts
        if [ "$draft" = "true" ]; then
            continue
        fi

        # Extract body (everything after second ---)
        body=$(sed '1,/^---$/d; 1,/^---$/d' "$file")

        # Collect all text
        all_text="$title $description $tags $body"

        # Extract and save words
        extract_words "$all_text" >> "$TEMP_WORDS"

    done < <(find "$content_type_dir" -type f \( -name "*.md" -o -name "*.mdx" \) -print0)
done

# Sort, count, and create frequency map
echo "Creating word frequency map..."

# Create a sorted list of unique words with their frequencies
word_freq=$(sort "$TEMP_WORDS" | uniq -c | sort -nr)

# Start building JSON
echo "{" > "$OUTPUT_FILE"
echo '  "words": [' >> "$OUTPUT_FILE"

first_word=true

# Process each word and its frequency
while IFS=' ' read -r count word; do
    # Skip if empty
    if [ -z "$word" ]; then
        continue
    fi

    # Add comma if not first word
    if [ "$first_word" = false ]; then
        echo "," >> "$OUTPUT_FILE"
    else
        first_word=false
    fi

    # Write word entry without newline
    printf '    {"word": "%s", "count": %d}' "$word" "$count" >> "$OUTPUT_FILE"

done <<< "$word_freq"

# Close JSON arrays and object
echo "" >> "$OUTPUT_FILE"
echo "  ]," >> "$OUTPUT_FILE"

# Add metadata
total_words=$(wc -l < "$TEMP_WORDS")
unique_words=$(sort -u "$TEMP_WORDS" | wc -l)

echo '  "metadata": {' >> "$OUTPUT_FILE"
echo "    \"totalWords\": $total_words," >> "$OUTPUT_FILE"
echo "    \"uniqueWords\": $unique_words," >> "$OUTPUT_FILE"
echo "    \"generated\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"" >> "$OUTPUT_FILE"
echo "  }" >> "$OUTPUT_FILE"
echo "}" >> "$OUTPUT_FILE"

# Clean up
rm -f "$TEMP_WORDS"

echo ""
echo "Word index generated:"
echo "- Total words processed: $total_words"
echo "- Unique words found: $unique_words"
echo "- Output written to: $OUTPUT_FILE"
