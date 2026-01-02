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

export type Tag = z.infer<typeof tagSchema>;

export type RawProject = z.infer<typeof projectSchema>;

export type ProjectsByCategory = { [category: string]: RawProject[] };

export const languageCodeSchema = z.enum([
  "en",
  "zh",
  "ja",
  "fr",
  "es",
  "id",
  "ru",
  "ko",
]);

export type LanguageCode = z.infer<typeof languageCodeSchema>;

export const languageSchema = z.object({
  code: languageCodeSchema,
  text: z.string(),
});

export const allLanguagesSchema = z.array(languageSchema);

export type Language = z.infer<typeof languageSchema>;

export const yearSchema = z.coerce.number().min(2016).max(2025);

export const allYearsSchema = z.array(
  z.object({
    year: yearSchema,
    languages: z.array(languageCodeSchema),
  }),
);
