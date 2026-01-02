import { z } from "astro:content";
import { languageCodeSchema } from "../schema";

const yearContributorsSchema = z.object({
  authors: z.array(z.string()),
  translators: z.record(languageCodeSchema, z.array(z.string()).optional()),
});

export const byYear: { [year: string]: unknown } = {
  "2016": {
    authors: ["michaelrambeau", "SachaG"],
    translators: {
      ja: ["azukiwasher", "meltedice", "vanxx2"],
      zh: ["feweekly"],
    },
  },
  "2017": {
    authors: ["michaelrambeau", "SachaG"],
    translators: {
      es: ["jvalen"],
      fr: [],
      ja: ["azukiwasher", "meltedice"],
      zh: ["feweekly", "frankyxhl"],
      id: ["lobothijau"],
    },
  },
  "2018": {
    authors: ["michaelrambeau", "SachaG"],
    translators: {
      es: ["jvalen"],
      zh: ["seognil"],
    },
  },
  "2019": {
    authors: ["michaelrambeau", "SachaG"],
    translators: {
      es: ["jvalen"],
      ja: ["NurseAngel"],
      zh: ["seognil"],
    },
  },
  "2020": {
    authors: ["michaelrambeau", "bblackwo"],
    translators: {
      es: ["jvalen"],
      ja: ["NurseAngel"],
      zh: ["AngeloZuo"],
      ko: ["melancholy14"],
      ru: ["lex111"],
    },
  },
  "2021": {
    authors: ["michaelrambeau"],
    translators: {
      es: ["jvalen"],
      ja: ["NurseAngel"],
      zh: ["KimYangOfCat"],
      ko: ["rewrite0w0"],
    },
  },
  "2022": {
    authors: ["michaelrambeau"],
    translators: {
      es: ["jvalen"],
      ja: ["NurseAngel"],
      zh: ["KimYangOfCat"],
    },
  },
  "2023": {
    authors: ["michaelrambeau"],
    translators: {
      es: ["jvalen"],
      zh: ["poozhu"],
      ja: ["NurseAngel"],
      ko: ["kimjusang"],
    },
  },
  "2024": {
    authors: ["michaelrambeau"],
    translators: {
      es: ["jvalen"],
      fr: ["codinHamster"],
      zh: ["HuanBaby1314"],
      ja: ["NurseAngel"],
    },
  },
  "2025": {
    authors: ["michaelrambeau"],
    translators: {},
  },
};

export function getContributorsByYear(year: number) {
  const rawData = byYear[year.toString()];
  if (!rawData) throw new Error(`No contributors found for year ${year}`);
  const parsedData = yearContributorsSchema.parse(rawData);
  return parsedData;
}
