import React from 'react'
import ProjectAvatar from '../ProjectAvatar'
import './style.css'

const excluded = [
  'axios',
  'create-react-app',
  'animatecss',
  'react-boilerplate',
  'airbnb-style-guide',
  'front-end-checklist',
  'awesome',
  'json-server',
  'threejs',
  'express',
  'reveal',
  'immutable',
  'material-design-icons',
  '30-seconds-of-code'
]

const Wall = ({ projects }) => {
  const niceProjects = projects.filter(
    project => !excluded.includes(project.slug)
  )
  // .slice(0, 50)
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
