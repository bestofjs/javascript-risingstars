import React from 'react'
import tinytime from 'tinytime'

import ProjectChart from './ProjectChart'
import ProjectBlurb from './ProjectBlurb'

const templateMonthYear = tinytime('{Mo}/{YYYY}')

const ProjectDetails = ({ project, index, tagKey, isOpen }) => {
  return (
    <div className={`project-details ${isOpen ? 'is-open' : 'is-closed'}`}>
      <div className="project-details-inner">
        <ProjectBlurb project={project} index={index} tagKey={tagKey} />
        <ProjectChart project={project} />
        <ul className="project-links">
          {/*<li>Created {project.created_at}</li>*/}
          <li>
            <span className="project-created-at">
              Created {templateMonthYear.render(new Date(project.created_at))}
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
            <a href={project.url}>Homepage</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectDetails
