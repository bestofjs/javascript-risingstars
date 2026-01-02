import settings from "./years-setup.json";
import allLanguages from "./languages.json";
import { allLanguagesSchema, allYearsSchema } from "~/schema";

export function getYearSettings() {
  const parsedSettings = allYearsSchema.parse(settings);
  return parsedSettings;
}

export function getAllLanguages() {
  const parsedLanguages = allLanguagesSchema.parse(allLanguages);
  return parsedLanguages;
}

export function getAvailableLanguages(year: number) {
  const languageCodes =
    getYearSettings().find(({ year: y }) => y === year)?.languages || [];
  return languageCodes
    .map((code) => getAllLanguages().find((item) => item.code === code))
    .filter((language) => language !== undefined);
}
