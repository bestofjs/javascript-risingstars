import React from 'react'
import withState from 'recompose/withState'

import ProjectTableRow from './ProjectTableRow'
import ProjectDetails from './ProjectDetails'

// only first project of "all" category should start expanded
const withToggle = withState(
  'showDetails',
  'toggleDetails',
  props => props.tagKey === 'all' && props.index === 1
)

const ProjectContainer = ({ index, maxDelta, showDetails, ...props }) => {
  const { project } = props
  const widthPercent = (project.delta * 100) / maxDelta // use relative scale
  return (
    <div>
      <ProjectTableRow widthPercent={widthPercent} {...props} />
      <ProjectDetails
        key={`details-${index}`}
        isOpen={showDetails}
        {...props}
      />
    </div>
  )
}

export default withToggle(ProjectContainer)
