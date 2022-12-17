import flattenJSON from "flat";
import fs from "fs-extra";
import jdown from "jdown";
import path from "path";

import settings from "~/data/settings.json";
import allLanguages from "~/data/allLanguages.json";
import processProjectData from "utils/processProjectData";

/*
Shared logic between pages /:year/:language/index and /:year/:language/design pages
used to feed either `getStaticProps` or `getServerSideProps`
*/

export type PageProps = {
  allYears: number[];
  categories: RisingStars.Category[];
  projectsBySlug: RisingStars.Entities;
  language: string;
  languages: RisingStars.Language[];
  messages: RisingStars.IntlContent;
  projectsByTag: RisingStars.ProjectsByCategory;
  tags: RisingStars.Tag[];
  translations: RisingStars.IntlContent;
  year: number;
};

type YearSetting = { year: number; languages: string[] };

export async function getPageProps(
  year: number,
  language: string
): Promise<PageProps> {
  const projects = await getProjectData(year);
  const categories = await getCategories(year);
  const { projectsBySlug, projectsByTag } = processProjectData(projects, categories);

  const translations = await getTranslations(year, language);
  const messages = await getMessages(year, language);

  const allYears = settings.map(({ year: y }) => y);
  const languageCodes =
    (settings as YearSetting[]).find(({ year: y }) => y === year)?.languages ||
    [];
  // const currentYear = settings.find(({ current }) => !!current).year;

  const languages = languageCodes.map((code) =>
    allLanguages.find((item) => item.code === code)
  );

  const { tags } = await fetch(
    "https://bestofjs-static-api.vercel.app/projects.json"
  ).then((r) => r.json());

  return {
    year,
    language,
    projectsBySlug,
    tags,
    projectsByTag,
    messages,
    translations,
    allYears,
    languages,
    categories,
  };
}

async function getProjectData(year) {
  const filepath = path.resolve(process.cwd(), `data/${year}/projects.json`);
  return fs.readJSON(filepath);
}

async function getCategories(year) {
  const filepath = path.resolve(process.cwd(), `data/${year}/categories.json`);
  return fs.readJSON(filepath);
}

async function getTranslations(year: number, language: string) {
  const i18nFolderPath = path.resolve(process.cwd(), "i18n/md");
  const i18nData = await jdown(i18nFolderPath, { parseMd: false });

  if (!i18nData[year]) throw new Error(`No i18n data for the year ${year}!`);
  if (!Array.isArray(i18nData[year]))
    throw new Error(`i18n data for the year ${year} should be an array!`);

  const translations = i18nData[year]
    .filter((item) => item.language === language)
    .reduce((acc, val) => {
      acc[val.id] = val.contents;
      return acc;
    }, {});
  return translations;
}

async function getMessages(year: number, language: string) {
  const specificMessages = await readJSON(
    `i18n/messages/${year}/${language}.json`
  );
  const commonMessages = await readJSON(
    `i18n/messages/common/${language}.json`
  );

  const messageTree = { ...specificMessages, common: commonMessages };
  const messages = flattenJSON(messageTree);
  return messages as RisingStars.IntlContent;
}

function readJSON(filepath) {
  const fullFilepath = path.resolve(process.cwd(), filepath);
  return fs.readJSON(fullFilepath);
}
