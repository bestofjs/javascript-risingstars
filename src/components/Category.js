import React from 'react'
import { FormattedMessage } from 'react-intl'

import TranslatedBlock from '../utils/TranslatedBlock'
import ProjectTable from './ProjectTable/ProjectTable'
import Guest from './Guest'

const Category = ({
  projects,
  entities,
  locale,
  translations,
  tag,
  number,
  excluded = [],
  year,
  currentYear,
  intl,
  hasComment,
  ...props
}) => {
  const { count } = props
  if (!projects[tag]) throw new Error(`No projects with the tag "${tag}"`)
  const graphProjects = projects[tag].slice(0, count)
  const key = tag.replace(/-/gi, '')
  return (
    <section className="section">
      <div className={`container${hasComment ? '' : ' small-container'}`}>
        <a name={`section-${tag}`} />
        <h2 className="project-category-header">
          <span className="project-category-header-inner">
            <FormattedMessage id={`categories.${key}`} />
          </span>
        </h2>
        <div className={`${hasComment ? 'project-category-grid' : ''}`}>
          <div>
            <div className={`${hasComment ? 'column1' : ''}`}>
              <ProjectTable
                {...props}
                tagKey={key}
                projects={graphProjects}
                year={year}
                showBlurb={tag !== 'misc'}
                currentYear={currentYear}
                intl={intl}
              />
            </div>
          </div>
          <div>
            {hasComment && (
              <div className="column2">
                <div className="tag-card-comments markdown-body">
                  {key === 'vue' && year === 2017 && (
                    <Guest
                      guestId="evan"
                      translations={translations}
                      language={locale}
                      entities={entities}
                    />
                  )}
                  {/* TODO the guest section of categories should be handled in a smarter way! */}
                  {key === 'learning' && [2018, 2019].includes(year) && (
                    <Guest
                      guestId="angelos"
                      translations={translations}
                      language={locale}
                      entities={entities}
                    />
                  )}
                  <TranslatedBlock
                    translations={translations}
                    language={locale}
                    path={`categories.${tag}`}
                    entities={entities}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
