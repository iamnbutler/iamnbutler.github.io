import { z, defineCollection } from "astro:content";

const fragmentKind = {
  POST: "post",
  IMAGES: "images",
} as const;

export type FragmentKind = keyof typeof fragmentKind;

const tags = {
  WEB_DEV: "web-dev",
  PYTHON: "python",
  JAVASCRIPT: "js",
  DESIGN: "design",
};

export type Tag = keyof typeof tags;

const fragmentCollection = defineCollection({
  type: "content",
  schema: z.object({
    date_published: z.date(),
    title: z.string(),
    preview: z.string(),
    tags: z.array(z.nativeEnum(tags)),
    kind: z.nativeEnum(fragmentKind),
    set: z.string().optional(),
  }),
});

const fragmentSetCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    fragments: z.array(z.string()),
    tags: z.array(z.nativeEnum(tags)),
  }),
});

export const collections = {
  fragment: fragmentCollection,
  fragmentSet: fragmentSetCollection,
};
