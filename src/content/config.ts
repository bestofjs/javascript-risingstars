import { string } from "astro/zod";
import { defineCollection, z } from "astro:content";

// type Category = {
//   key: string;
//   limit: number;
//   count: number;
//   tags?:string[];
//   excluded?:string[];
// }

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

const categoryCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      key: z.string(),
      limit: z.number().optional(),
      count: z.number().optional(),
      tags: z.array(z.string()).optional(),
      excluded: z.array(z.string()).optional(),
      availableComments: z.array(z.string()).optional(),
      guest: z.string().optional(),
    })
  ),
});

export const collections = {
  categories: categoryCollection,
  comments: commentCollection,
  contributors: contributorCollection,
};
