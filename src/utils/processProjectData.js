const slugify = require("./slugify");

const processProject = (item) => {
  return {
    ...item,
    repository: `https://github.com/${item.full_name}`,
    slug: slugify(item.name),
  };
};

const sortBy = (fn) => (a, b) => fn(b) - fn(a);
const sortByYearlyDelta = sortBy((project) => project.delta);

function getSortedProjects(projectsBySlug) {
  return Object.values(projectsBySlug).slice().sort(sortByYearlyDelta);
}

function isMatchingTag(category, project) {
  const tags = category.tags || [category.key];
  return tags.some((tag) => project.tags.includes(tag));
}

function filterByTag(sortedProjects, projectsBySlug, category) {
  const { key, excluded, count } = category;
  const isMatching = (project) => {
    if (key === "all") {
      return !["learning", "meta"].some((tag) => project.tags.includes(tag));
    }
    return isMatchingTag(category, project);
  };
  const isExcluded = (project) => excluded && excluded.includes(project.slug);
  return sortedProjects.filter(
    (project) => isMatching(project) && !isExcluded(project)
  );
}

function getProjectsByTag(sortedProjects, projectsBySlug, categories) {
  return categories.reduce(
    (result, category) =>
      Object.assign({}, result, {
        [category.key]: filterByTag(sortedProjects, projectsBySlug, category),
      }),
    {}
  );
}

function getProjectsBySlug(payload) {
  const projectsBySlug = payload.projects
    .map(processProject)
    .reduce((acc, project) => {
      return { ...acc, [project.slug]: project };
    }, {});
  return projectsBySlug;
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

function processProjectData(projectData, categories) {
  const projectsBySlug = getProjectsBySlug(projectData);
  const sorted = getSortedProjects(projectsBySlug);
  const projectsByTag = getProjectsByTag(sorted, projectsBySlug, categories);
  projectsByTag.misc = getMiscProjects(projectsByTag, categories);
  return {
    projectsByTag,
    projectsBySlug,
  };
}

module.exports = processProjectData;
