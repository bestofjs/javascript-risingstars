import jdown from "jdown";
import fs from "fs-extra";
import flattenJSON from "flat";
import flatten from "lodash/flatten";
import { IntlProvider } from "react-intl";
import path from "path";

import settings from "../../../data/settings.json";
import allLanguages from "../../../data/allLanguages.json";
import processProjectData from "utils/processProjectData";
import { PageRoot } from "components/page-root";
import { AppDataContainer } from "app-data";

const siteMetadata = {
  title: `JavaScript Rising Stars`,
  url: "https://risingstars.js.org",
  GA: "UA-44563970-4",
};

type Props = {
  year: number;
  language: string;
  entities: RisingStars.Entities;
  projectsByTag: RisingStars.ProjectsByCategory;
  messages: RisingStars.IntlContent;
  translations: RisingStars.IntlContent;
  allYears: number[];
  currentYear: number;
  languages: RisingStars.Language[];
  categories: RisingStars.Category[];
};
const Root = ({
  year,
  language,
  entities,
  projectsByTag,
  messages,
  translations,
  allYears,
  currentYear,
  languages,
  categories,
}: Props) => {
  const fullUrl = `${siteMetadata.url}/${year}/${language}`;
  console.log({ fullUrl });

  return (
    <IntlProvider locale={language} messages={messages} defaultLocale="en">
      <AppDataContainer.Provider
        initialState={{ allYears, year, entities, translations }}
      >
        <PageRoot
          projects={projectsByTag}
          entities={entities}
          translations={translations}
          year={year}
          currentYear={currentYear}
          categories={categories}
          languages={languages}
        />
      </AppDataContainer.Provider>
    </IntlProvider>
  );
};

export default Root;

export function getStaticPaths() {
  const paths = flatten(
    settings.map(({ year, languages }) =>
      languages.map((language) => ({ year: year.toString(), language }))
    )
  ).map(({ year, language }) => ({ params: { year, language } }));

  return {
    paths,
    // paths: [
    //   { params: { year: "2019", language: "en" } },
    //   { params: { year: "2019", language: "ja" } },
    // ],
    fallback: false,
  };
}
type Params = {
  params: {
    year: string;
    language: string;
    data: any;
  };
};

type YearSetting = { year: number; languages: string[] };

export async function getStaticProps({ params }: Params) {
  const { year: yearParam, language } = params;
  const year = parseInt(yearParam, 0);

  const projects = await getProjectData(year);
  const categories = await getCategories(year);
  const { entities, projectsByTag } = processProjectData(projects, categories);

  const translations = await getTranslations(year, language);
  const messages = await getMessages(year, language);

  const allYears = settings.map(({ year: y }) => y);
  const languageCodes =
    (settings as YearSetting[]).find(({ year: y }) => y === year)?.languages ||
    [];
  const currentYear = settings.find(({ current }) => !!current).year;

  const languages = languageCodes.map((code) =>
    allLanguages.find((item) => item.code === code)
  );

  return {
    props: {
      year,
      language,
      entities,
      projectsByTag,
      messages,
      translations,
      currentYear,
      allYears,
      languages,
      categories,
    },
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
  return messages;
}

function readJSON(filepath) {
  const fullFilepath = path.resolve(process.cwd(), filepath);
  return fs.readJSON(fullFilepath);
}
