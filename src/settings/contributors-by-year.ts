import { z } from "astro:content";

const yearContributorsSchema = z.object({
  authors: z.array(z.string()),
  translators: z.object({
    es: z.array(z.string()).optional(),
    fr: z.array(z.string()).optional(),
    ja: z.array(z.string()).optional(),
    zh: z.array(z.string()).optional(),
    id: z.array(z.string()).optional(),
    ko: z.array(z.string()).optional(),
    ru: z.array(z.string()).optional(),
  }),
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
      zh: ["HuanBaby1314"],
    },
  },
};

export function getContributorsByYear(year: number) {
  const rawData = byYear[year.toString()];
  if (!rawData) throw new Error(`No contributors found for year ${year}`);
  const parsedData = yearContributorsSchema.parse(rawData);
  return parsedData;
}
