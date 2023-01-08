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
  const { projects, tags } = await getProjectData(year);

  const categories = await getCategories(year);
  const { projectsBySlug, projectsByTag } = processProjectData(
    projects,
    categories
  );

  const translations = await getTranslations(year, language, projectsBySlug);
  const messages = await getMessages(year, language);

  const allYears = settings.map(({ year: y }) => y);
  const languageCodes =
    (settings as YearSetting[]).find(({ year: y }) => y === year)?.languages ||
    [];

  const languages = languageCodes.map((code) =>
    allLanguages.find((item) => item.code === code)
  );

  return {
    year,
    language,
    tags,
    projectsByTag,
    messages,
    translations,
    allYears,
    languages,
    categories,
  };
}

async function getProjectData(year: number) {
  const filepath = path.resolve(process.cwd(), `data/${year}/projects.json`);
  return await fs.readJSON(filepath);
}

async function getCategories(year: number) {
  const filepath = path.resolve(process.cwd(), `data/${year}/categories.json`);
  return await fs.readJSON(filepath);
}

async function getTranslations(year: number, language: string, projectsBySlug) {
  const i18nFolderPath = path.resolve(process.cwd(), "i18n/md");
  const i18nData = await jdown(i18nFolderPath, { parseMd: false });

  if (!i18nData[year]) throw new Error(`No i18n data for the year ${year}!`);
  if (!Array.isArray(i18nData[year]))
    throw new Error(`i18n data for the year ${year} should be an array!`);

  const translations = i18nData[year]
    .filter((item) => item.language === language)
    .reduce((acc, val) => {
      const originalMarkdown = val.contents;
      const processedMarkdown = processMarkdown(
        projectsBySlug,
        originalMarkdown
      );
      acc[val.id] = processedMarkdown;
      return acc;
    }, {});
  return translations;
}

// Replace `{slug}` placeholders with a link to the project URL
function processMarkdown(projectsBySlug: RisingStars.Entities, md: string) {
  const processed = md.replace(/{(.+?)}/gi, (_, slug) => {
    const project = projectsBySlug[slug];
    if (!project) {
      return slug;
    }
    const url = project.url || project.repository;
    return `[${project.name}](${url})`;
  });
  return processed;
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
