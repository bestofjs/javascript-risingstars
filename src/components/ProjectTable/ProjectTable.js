import React from 'react'
import ProjectContainer from './ProjectContainer'

const ProjectTable = ({ projects, ...props }) => {
  const maxDelta = projects
    .map(p => p.delta)
    .reduce((a, b) => Math.max(a, b), [])
  return (
    <div className="project-table">
      {projects.map((project, i) => (
        <ProjectContainer
          key={project.slug}
          maxDelta={maxDelta}
          project={project}
          index={i + 1}
          {...props}
        />
      ))}
    </div>
  )
}

export default ProjectTable
