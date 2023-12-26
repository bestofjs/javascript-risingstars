import { slugify } from "./slugify";

// TODO cleanup and add types

export const processProject = (item) => {
  return {
    ...item,
    repository: `https://github.com/${item.full_name}`,
    slug: slugify(item.name),
  };
};

const sortBy = (fn) => (a, b) => fn(b) - fn(a);
const sortByYearlyDelta = sortBy((project) => project.delta);

function getSortedProjects(projectsBySlug: Map<string, RisingStars.Project>) {
  return Array.from(projectsBySlug.values()).slice().sort(sortByYearlyDelta);
}

function isMatchingTag(category, project) {
  const tags = category.tags || [category.key];
  return tags.some((tag) => project.tags.includes(tag));
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
    {}
  );
}

function getProjectsBySlug(projects: RisingStars.Project[]) {
  const map = new Map<string, RisingStars.Project>();
  projects.map(processProject).forEach((project) => {
    map.set(project.slug, project);
  });
  return map;
}

function getTopProjects(projectsByTag, categories) {
  return categories.reduce((acc, category) => {
    const categoryTopProjects = projectsByTag[category.key].slice(
      0,
      category.count + 1
    );
    return [...acc, ...categoryTopProjects];
  }, []);
}

function getMiscProjects(projectsByTag, categories) {
  const topProjects = getTopProjects(projectsByTag, categories);
  return projectsByTag.all.filter((p) => !topProjects.includes(p));
}

export function processProjectData(projectData, categories) {
  const projectsBySlug = getProjectsBySlug(projectData);
  const sorted = getSortedProjects(projectsBySlug);
  const projectsByTag = getProjectsByTag(sorted, categories);

  projectsByTag.misc = getMiscProjects(projectsByTag, categories);
  return {
    projectsByTag,
    projectsBySlug,
  };
}
