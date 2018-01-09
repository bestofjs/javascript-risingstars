import React from 'react'
import withState from 'recompose/withState'

import ProjectTableRow from './ProjectTableRow'
import ProjectDetails from './ProjectDetails'

const trends = [
  { name: 'downfast', value: -70 },
  { name: 'down', value: -30 },
  { name: 'downslow', value: 0 },
  { name: 'upslow', value: 30 },
  { name: 'up', value: 70 },
  { name: 'upfast', value: 9999 }
]

// only first project of "all" category should start expanded
const withToggle = withState('showDetails', 'toggleDetails', props => props.tagKey === 'all' && props.index === 1)

const ProjectContainer = ({
  project,
  index,
  showStars,
  showDelta,
  deltaFilter,
  showDescription = true,
  maxDelta,
  trendPercent,
  showDetails,
  toggleDetails,
  tagKey,
  year,
  currentYear,
  intl
}) => {
  const url = project.url || project.repository

  const widthPercent = project.delta * 100 / maxDelta // use relative scale

  const previousWidthPercent = widthPercent + widthPercent * trendPercent / 100

  const trend = trends.find(trend => {
    return trendPercent < trend.value
  })
  const trendClass = trend ? trend.name : 'na'
  return (
    <div>
      <ProjectTableRow
        key={project.slug}
        maxDelta={maxDelta}
        project={project}
        showStars={showStars}
        showDelta={showDelta}
        deltaFilter={deltaFilter}
        index={index}
        tagKey={tagKey}
        trendPercent={Math.round(Math.random() * 200) - 100}
        trendClass={trendClass}
        showDetails={showDetails}
        widthPercent={widthPercent}
        toggleDetails={toggleDetails}
      />
      <ProjectDetails
        key={`details-${index}`}
        project={project}
        index={index}
        tagKey={tagKey}
        isOpen={showDetails}
        year={year}
        currentYear={currentYear}
        intl={intl}
      />
    </div>
  )
}

export default withToggle(ProjectContainer)
