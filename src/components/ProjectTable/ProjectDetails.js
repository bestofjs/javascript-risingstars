import React from 'react'
import tinytime from 'tinytime'

import formatDelta from '../../utils/formatDelta'
import twitter from '../../../data/twitter.yaml'
import strings from '../../../i18n/2017/messages/en.yaml'

const templateMonthYear = tinytime('{Mo}/{YYYY}')

const ProjectDetails = ({ project, index, tagKey, isOpen }) => {
  const addSuffix = n =>
    n === 1 ? '#1' : n === 2 ? 'second' : n === 3 ? 'third' : `${n}th`

  const tweetText = `
  In 2017, ${
    twitter[project.slug] ? `@${twitter[project.slug]}` : `#${project.slug}`
  } added ${formatDelta(project.delta)} stars, making it the ${addSuffix(
    index
  )} most popular ${
    strings['categories-share'][tagKey]
  } on GitHub. #RisingStarsJS https://risingstars.js.org
`.trim()

  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
  const monthlyDeltas = [
    100,
    143,
    234,
    214,
    253,
    345,
    435,
    345,
    234,
    124,
    345,
    443
  ]
  const monthlyDeltaMax = monthlyDeltas.reduce((a, b) => Math.max(a, b))
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
        <div className="project-chart">
          <div className="project-chart-columns">
            {monthlyDeltas.map((d, i) => (
              <div key={i} className="project-chart-column">
                <div
                  className="project-chart-bar"
                  style={{
                    height: `${Math.round(d * 100 / monthlyDeltaMax)}%`
                  }}
                >
                  <div className="project-chart-stars">
                    <span>{d}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="project-chart-months">
            {months.map((m, i) => (
              <div key={i} className="project-chart-month">
                {m}
              </div>
            ))}
          </div>
        </div>
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
