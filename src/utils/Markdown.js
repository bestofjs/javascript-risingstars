import React from 'react'
import ReactMarkdown from 'react-markdown'

function processMarkdown(entities, md) {
  const processed = md.replace(/{(.+?)}/gi, (match, slug) => {
    const project = entities[slug]
    if (!project) {
      console.log(slug)
      return `NO slug ${slug}`
    }
    // throw new Error(`Unable to find project whose slug is ${slug}`)
    const url = project.url || project.repository
    return `[${project.name}](${url})`
  })
  return processed
}

const MD = ({ source, entities }) => (
  <ReactMarkdown source={processMarkdown(entities, source)} />
)

export default MD
