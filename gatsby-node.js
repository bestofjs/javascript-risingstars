const path = require('path')
const flatten = require('lodash.flatten')

const settings = require('./data/settings.json')

exports.onCreateNode = async ({
  node,
  boundActionCreators,
  getNode,
  loadNodeContent
}) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.mediaType === 'text/markdown' && node.ext === '.md') {
    // if (node.internal.type === `MarkdownRemark`) {
    // const fileNode = getNode(node.parent)
    const fileNode = node //getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    const content = await loadNodeContent(node)
    const language = parsedFilePath.name
    const parts = parsedFilePath.dir.split('/')
    const year = parts[0]
    const key = parts.slice(1).join('.')
    createNodeField({ node, name: `year`, value: year })
    createNodeField({ node, name: `language`, value: language })
    createNodeField({ node, name: `key`, value: key })
    createNodeField({ node, name: `markdown`, value: content })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators
  const component = path.resolve(`src/PageContainer.js`)
  const createSinglePage = ({ language, year }) => {
    console.log('Create page', language, year)
    createPage({
      path: `${year}/${language}`,
      component,
      context: {
        language,
        year
      }
    })
  }

  const allYearLanguageCombinations = flatten(
    settings.map(item =>
      item.languages.map(language => ({
        language,
        year: item.year
      }))
    )
  )
  allYearLanguageCombinations.map(createSinglePage)
  createRedirect({
    fromPath: `/`,
    toPath: `/2018/en`,
    redirectInBrowser: true
  })
  const years = settings.map(item => item.year)
  years.forEach(year => {
    createRedirect({
      fromPath: `/${year}`,
      toPath: `/${year}/en`,
      redirectInBrowser: true
    })
    createRedirect({
      fromPath: `/${year}/`, // the same thing with the trailing slash
      toPath: `/${year}/en`,
      redirectInBrowser: true
    })
  })
}
