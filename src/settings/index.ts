import settings from "./years-setup.json";
import allLanguages from "./languages.json";
import { allLanguagesSchema, allYearsSchema } from "~/schema";

export function getYearSettings() {
  const parsedSettings = allYearsSchema.parse(settings);
  return parsedSettings;
}

export function getLanguages() {
  const parsedLanguages = allLanguagesSchema.parse(allLanguages);
  return parsedLanguages;
}
