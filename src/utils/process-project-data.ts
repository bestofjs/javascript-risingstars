import { orderBy } from "es-toolkit";
import type { Category, RawProject } from "~/schema";

function getSortedProjects(projectsBySlug: Map<string, RawProject>) {
  return orderBy(Array.from(projectsBySlug.values()), ["delta"], ["desc"]);
}

function isMatchingTag(category: Category, project: RawProject) {
  const hasIncludedTag = (category.tags || [category.key]).some((tag) =>
    project.tags.includes(tag),
  );
  const hasExcludedTag = (category.excludedTags || []).some((tag) =>
    project.tags.includes(tag),
  );

  return hasIncludedTag && !hasExcludedTag;
}

function filterByTag(sortedProjects: RawProject[], category: Category) {
  const { key, excluded, count } = category;
  const isMatching = (project: RawProject) => {
    if (key === "all") {
      return !["learning", "meta"].some((tag) => project.tags.includes(tag));
    }
    return isMatchingTag(category, project);
  };

  const isExcluded = (project: RawProject) =>
    excluded && excluded.includes(project.slug);
  return sortedProjects
    .filter((project) => isMatching(project) && !isExcluded(project))
    .slice(0, count);
}

function getProjectsByTag(
  sortedProjects: RawProject[],
  categories: Category[],
) {
  return categories.reduce(
    (result, category) =>
      Object.assign({}, result, {
        [category.key]: filterByTag(sortedProjects, category),
      }),
    {},
  );
}

export function getProjectsBySlug(projects: RawProject[]) {
  const map = new Map<string, RawProject>();
  projects.forEach((project) => {
    map.set(project.overrideSlugInComments || project.slug, project);
  });
  return map;
}

export function processProjectData(
  projectData: RawProject[],
  categories: Category[],
) {
  const projectsBySlug = getProjectsBySlug(projectData);
  const sorted = getSortedProjects(projectsBySlug);
  const projectsByTag = getProjectsByTag(sorted, categories);

  return {
    projectsByTag,
    projectsBySlug,
  };
}
