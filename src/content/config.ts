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
    isOpenToWork: z.boolean().optional(),
  }),
});

const categorySchema = z.object({
  key: z.string(),
  limit: z.number().optional(),
  count: z.number().optional(),
  tags: z.array(z.string()).optional(),
  excluded: z.array(z.string()).optional(),
  excludedTags: z.array(z.string()).optional(),
  availableComments: z.array(z.string()).optional(),
  guest: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type Category = z.infer<typeof categorySchema>;

const categoryCollection = defineCollection({
  type: "data",
  schema: z.array(categorySchema),
});

const messagesCollection = defineCollection({
  type: "data",
});

export const collections = {
  categories: categoryCollection,
  comments: commentCollection,
  contributors: contributorCollection,
  messages: messagesCollection,
};
