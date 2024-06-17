import { z, defineCollection } from "astro:content";

const fragmentKind = {
  POST: "post",
  IMAGES: "images",
} as const;

const fragmentCollection = defineCollection({
  type: "content",
  schema: z.object({
    date_published: z.date(),
    title: z.string(),
    preview: z.string(),
    tags: z.array(z.string()),
    kind: z.nativeEnum(fragmentKind),
  }),
});

export const collections = {
  fragment: fragmentCollection,
};
