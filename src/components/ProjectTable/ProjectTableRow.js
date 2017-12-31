import React from 'react';
import withState from 'recompose/withState';
import Description from './Description';
import ProjectAvatar from '../ProjectAvatar';
import Stars from '../Stars';

const trends = [
  { name: 'downfast', value: -70 },
  { name: 'down', value: -30 },
  { name: 'downslow', value: 0 },
  { name: 'upslow', value: 30 },
  { name: 'up', value: 70 },
  { name: 'upfast', value: 9999 },
];

const withToggle = withState('showDetails', 'toggleDetails', false);

const ProjectTableRow = ({
  project,
  showStars,
  showDelta,
  deltaFilter,
  showDescription = true,
  index,
  maxDelta,
  trendPercent,
  showDetails,
  toggleDetails,
}) => {
  const url = project.url || project.repository;

  // use relative scale
  const widthPercent = project.delta * 100 / maxDelta;

  const previousWidthPercent = widthPercent + widthPercent * trendPercent / 100;

  // use absolute scale based on Vue as the max
  // const widthPercent = project.delta*100/39263

  const trend = trends.find(trend => {
    return trendPercent < trend.value;
  });
  const trendClass = trend ? trend.name : 'na';

  return (
    <div
      className={`project-table-row project-table-row-${trendClass} project-table-row${
        showDetails ? '-show-details' : '-hide-details'
      }`}
      onClick={() => {
        toggleDetails(!showDetails);
      }}
    >
      <div className="project-table-background">
        <div className="project-details">
          <ul>
            <li>Created {project.created_at}</li>
            <li>
              <a href={project.repository}>GitHub</a>
            </li>
            <li>
              <a href={project.url}>Homepage</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-table-inner">
        <div className="project-table-bar" style={{ width: `${widthPercent}%` }} />
        <div className="project-table-bar project-table-bar-previous" style={{ width: `${previousWidthPercent}%` }} />
        <div className="project-table-rank">
          <span>{index}</span>
        </div>

        <div className="project-table-contents">
          <ProjectAvatar project={project} size={50} />
          <div className="project-infos">
            <h4 className="project-name">{project.name}</h4>
            <div className="description-section">
              <Description text={project.description} />
            </div>
          </div>
          <Stars value={project.delta} decimals={1} />
          {/*
            <span className="project-trend">{trendPercent > 0 ? `+${trendPercent}` : trendPercent}%</span>
            */}
        </div>
      </div>
    </div>
  );
};

export default withToggle(ProjectTableRow);
