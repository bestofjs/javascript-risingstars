import React from 'react'
import tinytime from 'tinytime'

import ProjectChart from './ProjectChart'
import ProjectBlurb from './ProjectBlurb'

const templateMonthYear = tinytime('{Mo}/{YYYY}')
import { FormattedMessage } from 'react-intl'

const ProjectDetails = ({ project, index, tagKey, isOpen, year, intl }) => {
  return (
    <div className={`project-details ${isOpen ? 'is-open' : 'is-closed'}`}>
      <div className="project-details-inner">
        <ProjectBlurb
          project={project}
          index={index}
          tagKey={tagKey}
          year={year}
          intl={intl}
        />
        <ProjectChart project={project} intl={intl} />
        <ul className="project-links">
          <li>
            <span className="project-created-at">
              <FormattedMessage
                id="view_project.created"
                defaultMessage={`Created`}
              />{' '}
              {templateMonthYear.render(new Date(project.created_at))}
            </span>
          </li>
          <li>
            <a href={project.repository}>GitHub</a>
          </li>
          <li>
            <a href={`https://bestof.js.org/projects/${project.slug}`}>
              BestOfJS
            </a>
          </li>
          <li>
            <a href={project.url}>
              <FormattedMessage
                id="view_project.homepage"
                defaultMessage={`Homepage`}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectDetails
