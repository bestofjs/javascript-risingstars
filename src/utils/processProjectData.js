const processProject = require('./processProject')

const sortBy = fn => (a, b) => fn(b) - fn(a)
const sortByYearlyDelta = sortBy(project => project.delta)

function getSortedProjects(entities) {
  return Object.values(entities)
    .slice()
    .sort(sortByYearlyDelta)
}

function filterByTag(sortedProjects, entities, tag) {
  return sortedProjects
    .filter(project => tag === 'all' || project.tags.includes(tag))
    .slice(0, 20)
}

function getProjectsByTag(sortedProjects, entities, tags) {
  const all = sortedProjects.slice(0, 50)
  return tags.reduce(
    (result, tag) =>
      Object.assign({}, result, {
        [tag]: filterByTag(sortedProjects, entities, tag)
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
  const tags = categories.map(cat => cat.tag)
  const projectsByTag = getProjectsByTag(sorted, entities, tags)
  return {
    projectsByTag: projectsByTag,
    entities
  }
}

module.exports = processProjectData
