import React from 'react'
import tinytime from 'tinytime'

import formatDelta from '../../utils/formatDelta'
import strings from '../../../i18n/2017/messages/en.yaml'
import ProjectChart from './ProjectChart'

const templateMonthYear = tinytime('{Mo}/{YYYY}')

const ProjectDetails = ({ project, index, tagKey, isOpen }) => {
  const { slug, twitter, delta } = project
  const addSuffix = n =>
    n === 1 ? '#1' : n === 2 ? 'second' : n === 3 ? 'third' : `${n}th`

  const tweetText = `
  In 2017, ${twitter ? `@${twitter}` : `#${slug}`} added ${formatDelta(
    delta
  )} stars, making it the ${addSuffix(index)} most popular ${
    strings['categories-share'][tagKey]
  } on GitHub. #RisingStarsJS https://risingstars.js.org
`.trim()
  return (
    <div className={`project-details ${isOpen ? 'is-open' : 'is-closed'}`}>
      <div className="project-details-inner">
        <div className="project-blurb">
          In 2017, {project.name} added {formatDelta(project.delta, 1)} stars,
          making it the {addSuffix(index)} most popular{' '}
          {strings['categories-share'][tagKey]} on GitHub –{' '}
          <a
            href={`https://twitter.com/home?status=${encodeURIComponent(
              tweetText
            )}`}
            target="_blank"
          >
            Tweet
          </a>
        </div>
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
