const slugify = require('./slugify')

const processProject = item => {
  return {
    ...item,
    repository: `https://github.com/${item.full_name}`,
    slug: slugify(item.name)
  }
}

const sortBy = fn => (a, b) => fn(b) - fn(a)
const sortByYearlyDelta = sortBy(project => project.delta)

function getSortedProjects(entities) {
  return Object.values(entities)
    .slice()
    .sort(sortByYearlyDelta)
}

function filterByTag(sortedProjects, entities, category) {
  const { tag, excluded, count } = category
  const isMatching = project => tag === 'all' || project.tags.includes(tag)
  const isExcluded = project => excluded && excluded.includes(project.slug)
  return sortedProjects.filter(
    project => isMatching(project) && !isExcluded(project)
  )
}

function getProjectsByTag(sortedProjects, entities, categories) {
  return categories.reduce(
    (result, category) =>
      Object.assign({}, result, {
        [category.tag]: filterByTag(sortedProjects, entities, category)
      }),
    {}
  )
}

function getProjectsBySlug(payload) {
  const projectsBySlug = payload.projects
    .map(processProject)
    .reduce((acc, project) => {
      return { ...acc, [project.slug]: project }
    }, {})
  return projectsBySlug
}

function processProjectData(projectData, categories) {
  const entities = getProjectsBySlug(projectData)
  const sorted = getSortedProjects(entities)
  const projectsByTag = getProjectsByTag(sorted, entities, categories)
  return {
    projectsByTag: projectsByTag,
    entities
  }
}

module.exports = processProjectData
