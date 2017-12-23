import React from 'react'

import Description from './Description'
// import Delta from '../common/utils/Delta'
// import Stars from '../common/utils/Stars'
// import TagLabel from '../tags/TagLabelCompact'
import ProjectAvatar from '../ProjectAvatar'
import Stars from '../Stars'

const ProjectTableView = ({
  title,
  comment,
  icon,
  projects,
  showStars,
  showDelta = true,
  deltaFilter = 'yearly'
}) => (
  <div className="project-table">
    {projects.map((project, i) => (
      <ProjectTableView.Row
        key={project.slug}
        project={project}
        showStars={showStars}
        showDelta={showDelta}
        deltaFilter={deltaFilter}
        index={i + 1}
      />
    ))}
  </div>
)

ProjectTableView.Row = ({
  project,
  showStars,
  showDelta,
  deltaFilter,
  showDescription = true,
  index
}) => {
  const url = project.url || project.repository
  return (
    <a className="project-table-row" href={url}>
      <ProjectAvatar project={project} size={50} />
      <div className="main-column">
        <div className="row-1">
          <div>
            <span className="project-table-rank">#{index}</span>
            <span>{project.name}</span>
          </div>
          <div>
            <Stars value={project.delta} decimals={1} />
          </div>
        </div>
        <div className="description-section">
          <Description text={project.description} />
        </div>
      </div>
    </a>
  )
}

export default ProjectTableView
