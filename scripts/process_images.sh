#!/bin/bash

# process_images.sh
# Script to convert images to WebP format and resize them if larger than 1280px
# Usage: ./process_images.sh /path/to/images/directory

# Check if a directory was provided
if [ -z "$1" ]; then
  echo "Error: Please provide a directory path"
  echo "Usage: ./process_images.sh /path/to/images/directory"
  exit 1
fi

# Check if the directory exists
if [ ! -d "$1" ]; then
  echo "Error: Directory $1 does not exist"
  exit 1
fi

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo "Error: ImageMagick is required but not installed"
  echo "Please install it with: brew install imagemagick"
  exit 1
fi

# Navigate to the specified directory
cd "$1"
DIR_NAME=$(basename "$1")
echo "Processing images in $DIR_NAME..."

# Create a temp directory for WebP images
TEMP_DIR="webp_temp"
mkdir -p "$TEMP_DIR"

# Count total number of image files
total_files=$(find . -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | wc -l | xargs)
processed=0

# Process each image file
find . -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read img; do
  # Skip if it's in the temp directory
  if [[ "$img" == *"$TEMP_DIR"* ]]; then
    continue
  fi

  # Get image filename without path
  filename=$(basename "$img")
  name="${filename%.*}"
  
  # Get image dimensions
  dimensions=$(identify -format "%w %h" "$img")
  width=$(echo $dimensions | cut -d' ' -f1)
  height=$(echo $dimensions | cut -d' ' -f2)
  
  # Check if image needs resizing
  if [ $width -gt 1280 ] || [ $height -gt 1280 ]; then
    # Resize and convert to WebP
    convert "$img" -resize "1280x1280>" -quality 85 "$TEMP_DIR/${name}.webp"
    echo "Resized and converted $filename to WebP (was ${width}x${height})"
  else
    # Just convert to WebP without resizing
    convert "$img" -quality 85 "$TEMP_DIR/${name}.webp"
    echo "Converted $filename to WebP (keeping ${width}x${height})"
  fi
  
  processed=$((processed + 1))
  echo "Progress: $processed/$total_files images processed"
done

# Move the WebP images back to the original directory
for webp_img in "$TEMP_DIR"/*.webp; do
  if [ -f "$webp_img" ]; then
    mv "$webp_img" ./
  fi
done

# Remove the temp directory
rmdir "$TEMP_DIR"

echo "-------------------------------------"
echo "Conversion complete!"
echo "Processed $processed images in $DIR_NAME"
echo "All images converted to WebP format"
echo "Images larger than 1280px have been resized"
echo "-------------------------------------"

# Update any markdown files in the directory to use WebP extensions
if find . -maxdepth 1 -name "*.md" | grep -q .; then
  echo "Updating markdown files to reference WebP images..."
  for md_file in *.md; do
    # Replace image references in markdown
    sed -i '' -E 's/\.(jpg|jpeg|png|gif)(\)| )/\.webp\2/g' "$md_file"
  done
  echo "Markdown files updated to reference WebP images"
fi

echo "Done!"