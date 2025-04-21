import { defineCollection, z } from "astro:content";

// Define available tags for all content types
const CommonTags = z.enum([
  "gpui",
  "design",
  "eng",
  "art",
  "zed",
  "facebook",
  "3d",
  "data-viz",
  "hardware",
  "ai",
]);

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(CommonTags).optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    tags: z.array(CommonTags).optional(),
  }),
});

const shots = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      date: z.coerce.date(),
      img: image(),
      tags: z.array(CommonTags).optional(),
    }),
});

const lists = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(CommonTags).optional(),
  }),
});

export const collections = { blog, work, projects, shots, lists };
