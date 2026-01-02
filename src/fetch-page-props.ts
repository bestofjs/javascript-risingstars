import { getEntry } from "astro:content";
import invariant from "tiny-invariant";

import { processProjectData } from "~/utils/process-project-data";
import type { Category } from "./content.config";
import type {
  Language,
  LanguageCode,
  ProjectsByCategory,
  RawProject,
  Tag,
} from "./schema";
import { getLanguages, getYearSettings } from "./settings";

/*
Shared logic between pages /:year/:language/index and /:year/:language/design pages
used to feed either `getStaticProps` or `getServerSideProps`
*/

export type MainPageProps = {
  allYears: number[];
  categories: Category[];
  projectsBySlug: Map<string, RawProject>;
  language: LanguageCode;
  languages: Language[];
  projectsByTag: ProjectsByCategory;
  tags: Tag[];
  year: number;
};

export async function fetchPageProps(
  year: number,
  language: LanguageCode,
): Promise<MainPageProps> {
  const { projects, tags } = await getProjectData(year);

  const categories = await getCategories(year);
  const { projectsBySlug, projectsByTag } = processProjectData(
    projects,
    categories,
  );

  const allYears = getYearSettings().map(({ year: y }) => y);
  const languageCodes =
    getYearSettings().find(({ year: y }) => y === year)?.languages || [];

  const languages = languageCodes
    .map((code) => getLanguages().find((item) => item.code === code))
    .filter((language) => language !== undefined);

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
  const entry = await getEntry("projects", year.toString());
  invariant(entry, `No projects found for year ${year}`);
  return entry.data;
}

async function getCategories(year: number) {
  const item = await getEntry("categories", year.toString());
  if (!item) throw new Error(`No categories found for year ${year}`);
  return item.data;
}
