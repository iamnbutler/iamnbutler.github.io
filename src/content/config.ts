import { z, defineCollection } from "astro:content";
const fragmentCollection = defineCollection({
  type: "content",
  schema: z.object({
    date_published: z.date(),
    title: z.string(),
    preview: z.string(),
    tags: z.array(z.string()),
  }),
});

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  fragment: fragmentCollection,
  page: pageCollection,
};
