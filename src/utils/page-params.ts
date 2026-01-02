import { z } from "astro:content";
import { languageCodeSchema, yearSchema } from "~/schema";

export const paramsSchema = z.object({
  year: yearSchema,
  language: languageCodeSchema,
});

export function parsePageParams(params: unknown) {
  return paramsSchema.parse(params);
}
