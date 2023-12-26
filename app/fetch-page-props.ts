import fs from "fs-extra";
import path from "path";

import settings from "~/settings/years-setup.json";
import allLanguages from "~/settings/languages.json";
import { processProjectData } from "~/utils/process-project-data";

/*
Shared logic between pages /:year/:language/index and /:year/:language/design pages
used to feed either `getStaticProps` or `getServerSideProps`
*/

export type MainPageProps = {
  allYears: number[];
  categories: RisingStars.Category[];
  projectsBySlug: Map<string, RisingStars.Project>;
  language: string;
  languages: RisingStars.Language[];
  projectsByTag: RisingStars.ProjectsByCategory;
  tags: RisingStars.Tag[];
  year: number;
};

type YearSetting = { year: number; languages: string[] };

export async function fetchPageProps(
  year: number,
  language: string
): Promise<MainPageProps> {
  const { projects, tags } = await getProjectData(year);

  const categories = await getCategories(year);
  const { projectsBySlug, projectsByTag } = processProjectData(
    projects,
    categories
  );

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
    projectsBySlug,
    tags,
    projectsByTag,
    allYears,
    languages,
    categories,
  };
}

export async function getProjectData(year: number) {
  const filepath = path.resolve(process.cwd(), `data/${year}/projects.json`);
  return fs.readJSON(filepath);
}

async function getCategories(year: number) {
  const filepath = path.resolve(process.cwd(), `data/${year}/categories.json`);
  return fs.readJSON(filepath);
}
