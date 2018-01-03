import React from 'react'

import Description from './Description'
import ProjectAvatar from '../ProjectAvatar'
import Stars from '../Stars'
import strings from '../../../i18n/2017/messages/en.yaml'
import formatDelta from '../../utils/formatDelta'
import twitter from '../../../data/twitter.yaml'
import ProjectDetails from './ProjectDetails'

const trends = [
  { name: 'downfast', value: -70 },
  { name: 'down', value: -30 },
  { name: 'downslow', value: 0 },
  { name: 'upslow', value: 30 },
  { name: 'up', value: 70 },
  { name: 'upfast', value: 9999 }
]

const ProjectTableRow = ({
  project,
  showDescription = true,
  index,
  trendPercent,
  showDetails,
  toggleDetails,
  tagKey,
  trendClass,
  widthPercent
}) => {
  return (
    <div
      className={`project-table-row ${showDetails ? 'is-open' : 'is-closed'}`}
      onClick={() => {
        toggleDetails(!showDetails)
      }}
    >
      <div className="ranking">{index}</div>
      <div className="inner">
        <div className="icon">
          <ProjectAvatar project={project} size={50} />
        </div>
        <div className="main-column">
          {true && (
            <div
              className="project-table-bar"
              style={{ width: `${widthPercent}%` }}
            />
          )}
          <h4 className="project-name">{project.name}</h4>
          {showDescription && (
            <div className="description">
              <span>{project.description}</span>
            </div>
          )}
        </div>
        <div className="stars">
          <Stars value={project.delta} decimals={1} />
        </div>
      </div>
    </div>
  )
}

export default ProjectTableRow
