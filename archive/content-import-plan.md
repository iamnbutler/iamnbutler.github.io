# Content Import Plan

This document outlines the process for importing the categorized archive content into the site structure.

## Process for each content type

### Posts (Blog)
1. Create a new directory in `src/content/blog/` named with a URL-friendly version of the post title
2. Create an `index.md` file with appropriate frontmatter
3. Copy and format the content from the archive file

### Projects
1. Create a new directory in `src/content/projects/` named with a URL-friendly version of the project title
2. Create an `index.md` file with appropriate frontmatter
3. Copy images and other assets related to the project
4. Copy and format the content from the archive file

### Shots
1. Create a new directory in `src/content/shots/` named with a URL-friendly version of the shot title
2. Create an `index.md` file with minimal frontmatter (title, date, img)
3. Copy images to the shot directory
4. Keep the content minimal, focusing on the visual elements

## Initial Import Examples

Let's start with one example from each category:

### Blog Post
- Source: `post/2021-06-13-writing-with-adhd.md`
- Destination: `src/content/blog/writing-with-adhd/index.md`

### Project
- Source: `_sort/project/2021-04-10-mixblocks.md`
- Destination: `src/content/projects/mixblocks/index.md`

### Shot
- Source: `post/2019-11-26-juice-for-audiobooks.md`
- Destination: `src/content/shots/juice-audiobooks/index.md`

## Next Steps

After implementing these examples, we'll:
1. Verify the formatting and structure match the site's existing content
2. Address any issues or adjustments needed
3. Proceed with importing the remaining content in batches