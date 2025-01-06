import { orderBy } from "es-toolkit";
import type { Category } from "~/content.config";

function getSortedProjects(projectsBySlug: Map<string, RisingStars.Project>) {
  return orderBy(Array.from(projectsBySlug.values()), ["delta"], ["desc"]);
}

function isMatchingTag(category: Category, project: RisingStars.Project) {
  const hasIncludedTag = (category.tags || [category.key]).some((tag) =>
    project.tags.includes(tag),
  );
  const hasExcludedTag = (category.excludedTags || []).some((tag) =>
    project.tags.includes(tag),
  );

  return hasIncludedTag && !hasExcludedTag;
}

function filterByTag(
  sortedProjects: RisingStars.Project[],
  category: Category,
) {
  const { key, excluded, count } = category;
  const isMatching = (project: RisingStars.Project) => {
    if (key === "all") {
      return !["learning", "meta"].some((tag) => project.tags.includes(tag));
    }
    return isMatchingTag(category, project);
  };

  const isExcluded = (project: RisingStars.Project) =>
    excluded && excluded.includes(project.slug);
  return sortedProjects
    .filter((project) => isMatching(project) && !isExcluded(project))
    .slice(0, count);
}

function getProjectsByTag(
  sortedProjects: RisingStars.Project[],
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

export function getProjectsBySlug(projects: RisingStars.Project[]) {
  const map = new Map<string, RisingStars.Project>();
  projects.forEach((project) => {
    map.set(project.overrideSlugInComments || project.slug, project);
  });
  return map;
}

export function processProjectData(
  projectData: RisingStars.Project[],
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
