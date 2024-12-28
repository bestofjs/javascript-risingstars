import { z } from "astro:content";

export const projectSchema = z.object({
  name: z.string(),
  // `slug` is used to link to the project page in Best of JS but...
  slug: z.string(),
  // ...`ref`  can overrides the slug as the "reference" used in the comments.
  // Reason: slugs can change over time (E.g. `vue-next` repo became Vue.js and Vue.js became Vue.js 2)
  // but we don't want to change the reference in all the existing comments.
  ref: z.string().optional(),
  full_name: z.string(),
  description: z.string(),
  stars: z.number().nullable(),
  delta: z.number(),
  monthly: z.array(z.number().nullable().optional()),
  tags: z.array(z.string()),
  owner_id: z.number(),
  icon: z.string().optional(),
  created_at: z.coerce.date(),
  url: z.string().optional(),
});

export type RawProject = z.infer<typeof projectSchema>;
