import { z, defineCollection } from "astro:content";

const fragmentCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    preview: z.string(),
  }),
});

export const collections = {
  fragment: fragmentCollection,
};
