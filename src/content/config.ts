import { defineCollection, z } from "astro:content";

const commentCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    language: z.string(), // z.enum(['en', 'es']),
  }),
});

const contributorCollection = defineCollection({
  schema: z.object({
    userName: z.string(),
    userId: z.number(),
    name: z.string(),
    url: z.string().optional(),
  }),
});

export const collections = {
  comments: commentCollection,
  contributors: contributorCollection,
};
