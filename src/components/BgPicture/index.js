import React from 'react'
import ProjectAvatar from '../ProjectAvatar'
import './style.css'

const excluded = [
  'axios', 'typescript', 'animatecss', 'react-boilerplate',
  'angularjs', 'airbnb-style-guide', 'awesome', 'material-ui', 'json-server', 'threejs', 'express',
  'reveal', 'react-starter-kit', 'immutable', 'material-design-icons'
]

const Wall = ({ projects }) => {
  const niceProjects = projects
    .filter(project => !excluded.includes(project.slug))
    .slice(0, 36)
  return (
    <div id="bgpicture">
      <div className="bgpicture-grid">
        {niceProjects.map((project, i) => {
          const rowNumber = Math.floor(i / 7)
          const evenRow = rowNumber % 2 === 0
          if (evenRow) {
            return [<Cell project={project} />, <Cell />]
          } else {
            return [<Cell />, <Cell project={project} />]
          }
        })}
      </div>
    </div>
  )
}

const Cell = ({ project }) => {
  if (!project) return <div className="empty-cell" />
  return (
    <div>
      <ProjectAvatar project={project} size={75} />
    </div>
  )
}

export default Wall
