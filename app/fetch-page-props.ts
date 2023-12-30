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
  return await getJsonDataFromFileSystem(`data/${year}/projects.json`);
}

async function getCategories(year: number) {
  return await getJsonDataFromFileSystem(`data/${year}/categories.json`);
}

const fileCache = new Map<string, any>();

export const projectRoot = process.cwd();

async function getJsonDataFromFileSystem(filename: string) {
  if (!fileCache.has(filename)) {
    const filepath = path.join(projectRoot, "public", filename);
    console.log("Reading file", filepath);
    const data = await fs.readJSON(filepath);
    fileCache.set(filename, data);
  }
  return fileCache.get(filename);
}
