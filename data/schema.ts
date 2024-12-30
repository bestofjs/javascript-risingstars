import { z } from "astro:content";

export const projectSchema = z.object({
  name: z.string(),
  // `slug` is used to link to the project details page in Best of JS but...
  slug: z.string(),
  // ...`overrideSlugInComments`  can override the slug used in the comments as a placeholder between curly brackets.
  // Reason: slugs can change over time (E.g. `vue-next` repo became Vue.js and Vue.js became Vue.js 2)
  // but we don't want to change the reference in all the existing comments.
  overrideSlugInComments: z.string().optional(),
  full_name: z.string(),
  description: z.string(),
  stars: z.number(),
  delta: z.number(),
  monthly: z.array(z.number().nullable()),
  tags: z.array(z.string()),
  owner_id: z.number(),
  icon: z.string().optional(),
  created_at: z.coerce.date(),
  url: z.string().optional(),
});

export const tagSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export type RawProject = z.infer<typeof projectSchema>;
