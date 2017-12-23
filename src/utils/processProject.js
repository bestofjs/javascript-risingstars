const slugify = require('./slugify')

function processProject(item) {
  const result = {
    full_name: item.full_name,
    repository: 'https://github.com/' + item.full_name,
    slug: slugify(item.name),
    tags: item.tags,
    delta: item.delta,
    description: item.description,
    name: item.name,
    url: item.url,
    version: item.version,
    owner_id: item.owner_id
  }
  return result
}

module.exports = processProject
