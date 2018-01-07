import React from 'react'
import { FormattedMessage } from 'react-intl'

import formatDelta from '../../utils/formatDelta'
import strings from '../../../i18n/2017/messages/en.yaml'

const ProjectBlurb = ({ project, index, tagKey, year, intl }) => {
  const { slug, twitter, delta, name } = project
  const category = intl.formatMessage({ id: `categories-share.${tagKey}` })
  const values = {
    year: year,
    name: `@${twitter}` || `#${slug}`,
    ranking: index,
    delta: formatDelta(project.delta, 1),
    category
  }
  const tweetText = intl
    .formatMessage(
      {
        id: 'view_project.twitter.text'
      },
      values
    )
    .concat(' #RisingStarsJS https://risingstars.js.org')
  const tweetURL = `https://twitter.com/home?status=${encodeURIComponent(
    tweetText
  )}`
  // const addSuffix = n =>
  //   n === 1 ? '#1' : n === 2 ? 'second' : n === 3 ? 'third' : `${n}th`
  return (
    <div className="project-blurb">
      <FormattedMessage
        id="view_project.twitter.text"
        defaultMessage={`In {year}, {name} was the project #{ranking}...`}
        values={{ ...values, name }}
      />{' '}
      <a href={tweetURL} target="_blank">
        <FormattedMessage
          id="view_project.twitter.action"
          defaultMessage="Tweet"
        />
      </a>
    </div>
  )
}

export default ProjectBlurb
