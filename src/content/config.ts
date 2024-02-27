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

export const collections = {
  fragment: fragmentCollection,
};
