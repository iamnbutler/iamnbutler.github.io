import { IProject } from "@/types/project";

export const embeddingVideosInMarkdown: IProject = {
  title: "Embedding Videos in Markdown",
  slug: "embedding-videos-in-markdown",
  url: "/embedding-videos-in-markdown",
  tagline:
    "Creating an ergonomic way to add embedded videos with pure markdown inputs in a React environment.",
  preview:
    "Markdown doesn't have a native way to embed videos outside of using the `<video>` html tag, and often allowing people to add arbitrary HTML to markdown can be dangerous. When building Zed.dev, we ran into this issue and came up with a somewhat obvious but functional approach to using the markdown image syntax for both images & videos.",
  date: {
    raw: new Date("2022/11/28"),
    year: "2022",
    mmddyy: "11/28/22",
    relative: "4 months ago", // Replace this with a function to calculate the relative time
  },
  cover: undefined,
  tags: [],
  content: `Markdown doesn't have a native way to embed videos outside of using the \`<video>\` html tag, and often allowing people to add arbitrary HTML to markdown can be dangerous.

When building Zed.dev we ran into this issue, and I came up with a somewhat obvious, but functional approach to using the markdown image syntax for both images & videos.

## The Hack

...

### Cons to This Approach
- Videos won't render in a markdown preview, like on Github or preview view
- Requires being in an environment you can pass custom components to your chosen Markdown renderer

## Alternate Approaches

...

Then use some shenanigans to swap the cover image and the video element.

### Custom Video Element
If you have the option to use something like \`mdx\` you can always just write a custom video element and call it inside your markdown like this:

\`\`\`mdx
# My Title

<Video
  cover='path/to/video_1/cover.png'
  webm='path/to/video_1/cover.png'
  mp4='path/to/video_1/cover.mp4'
  autoplay
  muted
>
Video Caption
</Video>
\`\`\``,
};
