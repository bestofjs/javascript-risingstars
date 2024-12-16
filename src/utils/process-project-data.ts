import { slugify } from "./slugify";

// TODO cleanup and add types

export const processProject = (item) => {
  return {
    ...item,
    slug: slugify(item.name),
  };
};

const sortBy = (fn) => (a, b) => fn(b) - fn(a);
const sortByYearlyDelta = sortBy((project) => project.delta);

function getSortedProjects(projectsBySlug: Map<string, RisingStars.Project>) {
  return Array.from(projectsBySlug.values()).slice().sort(sortByYearlyDelta);
}

function isMatchingTag(category, project) {
  const hasIncludedTag = (category.tags || [category.key]).some((tag) =>
    project.tags.includes(tag),
  );
  const hasExcludedTag = (category.excludedTags || []).some((tag) =>
    project.tags.includes(tag),
  );

  return hasIncludedTag && !hasExcludedTag;
}

function filterByTag(sortedProjects, category) {
  const { key, excluded, count } = category;
  const isMatching = (project) => {
    if (key === "all") {
      return !["learning", "meta"].some((tag) => project.tags.includes(tag));
    }
    return isMatchingTag(category, project);
  };
  const isExcluded = (project) => excluded && excluded.includes(project.slug);
  return sortedProjects
    .filter((project) => isMatching(project) && !isExcluded(project))
    .slice(0, count);
}

function getProjectsByTag(sortedProjects, categories) {
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
  projects.map(processProject).forEach((project) => {
    map.set(project.slug, project);
  });
  return map;
}

export function processProjectData(projectData, categories) {
  const projectsBySlug = getProjectsBySlug(projectData);
  const sorted = getSortedProjects(projectsBySlug);
  const projectsByTag = getProjectsByTag(sorted, categories);

  return {
    projectsByTag,
    projectsBySlug,
  };
}
