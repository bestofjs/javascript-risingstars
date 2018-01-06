import React from 'react'
import { FormattedMessage } from 'react-intl'

import Graph from './Graph'
import TranslatedBlock from '../utils/TranslatedBlock'
import ProjectTable from './ProjectTable/ProjectTable'
import Evan from './Evan'

// HoF that returns a Category component
const makeCategory = ({ projects, entities, locale, translations }) => ({
  tag,
  number,
  excluded = [],
  count = 10,
  children
}) => {
  if (!projects[tag]) throw new Error(`No projects with the tag "${tag}"`)
  const graphProjects = projects[tag]
    .filter(project => !excluded.includes(project.slug))
    .slice(0, count)
  const key = tag.replace(/-/gi, '')
  return (
    <section className="section">
      <div className="container">
        <a name={tag} />
        <h2 className="project-category-header">
          <span className="project-category-header-inner">
            <FormattedMessage id={`categories.${key}`} />
          </span>
        </h2>
        <div className="project-category-grid">
          <div>
            <div className="column1">
              <ProjectTable
                tagKey={key}
                projects={graphProjects.slice(0, 20)}
              />
            </div>
          </div>
          <div>
            <div className="column2">
              <div className="tag-card-comments markdown-body">
                {key === 'vue' && <Evan/>}
                <TranslatedBlock
                  translations={translations}
                  language={locale}
                  path={`categories.${tag}`}
                  entities={entities}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default makeCategory
