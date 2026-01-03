import settings from "./years-setup.json";
import allLanguages from "./languages.json";
import { allLanguagesSchema, allYearsSchema } from "~/schema";
import { getCollection } from "astro:content";

export function getYearSettings() {
  const parsedSettings = allYearsSchema.parse(settings);
  return parsedSettings;
}

export function getAllYears() {
  return getYearSettings().map(({ year }) => year);
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

export async function getAllCategories() {
  const collectionItems = await getCollection("categories");
  return collectionItems.flatMap((item) => {
    const languages =
      getYearSettings().find(({ year: y }) => String(y) === item.id)
        ?.languages || [];
    return languages.flatMap((language) =>
      item.data.flatMap((category) => ({
        year: item.id,
        language,
        category,
      })),
    );
  });
}
