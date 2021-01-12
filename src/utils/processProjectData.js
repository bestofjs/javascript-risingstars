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

function getSortedProjects(entities) {
  return Object.values(entities).slice().sort(sortByYearlyDelta);
}

function isMatchingTag(category, project) {
  const tags = category.tags || [category.key];
  return tags.some((tag) => project.tags.includes(tag));
}

function filterByTag(sortedProjects, entities, category) {
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

function getProjectsByTag(sortedProjects, entities, categories) {
  return categories.reduce(
    (result, category) =>
      Object.assign({}, result, {
        [category.key]: filterByTag(sortedProjects, entities, category),
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
  const entities = getProjectsBySlug(projectData);
  const sorted = getSortedProjects(entities);
  const projectsByTag = getProjectsByTag(sorted, entities, categories);
  projectsByTag.misc = getMiscProjects(projectsByTag, categories);
  return {
    projectsByTag,
    entities,
  };
}

module.exports = processProjectData;
