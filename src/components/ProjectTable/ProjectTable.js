import React from 'react'
import ProjectContainer from './ProjectContainer'

const ProjectTableView = ({
  title,
  comment,
  icon,
  projects,
  showStars,
  showDelta = true,
  deltaFilter = 'yearly',
  tagKey
}) => {
  const maxDelta = projects.map(p => p.delta).reduce((a, b) => Math.max(a, b))
  return (
    <div className="project-table">
      {projects.map((project, i) => (
        <ProjectContainer
          key={project.slug}
          maxDelta={maxDelta}
          project={project}
          showStars={showStars}
          showDelta={showDelta}
          deltaFilter={deltaFilter}
          index={i + 1}
          tagKey={tagKey}
          trendPercent={Math.round(Math.random() * 200) - 100}
        />
      ))}
    </div>
  )
}

export default ProjectTableView
