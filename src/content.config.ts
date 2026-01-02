import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { categorySchema, projectSchema, tagSchema } from "~/schema";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./data" }),
  schema: z.object({
    projects: z.array(projectSchema),
    tags: z.array(tagSchema),
  }),
});

const commentCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/comments" }),
  schema: z.object({
    id: z.string(),
    language: z.string(), // z.enum(['en', 'es']),
  }),
});

const contributorCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/contributors" }),
  schema: z.object({
    userName: z.string(),
    userId: z.number(),
    name: z.string(),
    url: z.string().optional(),
    isOpenToWork: z.boolean().optional(),
  }),
});

const categoryCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/categories" }),
  schema: z.array(categorySchema),
});

const messagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/messages" }),
});

export const collections = {
  categories: categoryCollection,
  comments: commentCollection,
  contributors: contributorCollection,
  messages: messagesCollection,
  projects: projectsCollection,
};
