import React from 'react'

import formatDelta from '../../utils/formatDelta'
import strings from '../../../i18n/2017/messages/en.yaml'

const ProjectBlurb = ({ project, index, tagKey }) => {
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
  )
}

export default ProjectBlurb
