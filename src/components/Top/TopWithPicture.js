import React from 'react'
import { FormattedMessage } from 'react-intl'

import Introduction from './Introduction'

/*
2 columns layout used in 2017, showing a picture on the left (the Death Star!)
*/
const TopWithPicture = props => {
  return (
    <div className="introduction-container container container-section">
    <div className="main-image">
      <img src="/img/risingstars.png" />
    </div>
    <div className="introduction small-card markdown-body card-introduction">
      <div className="introduction-inner">
        <h1>
          <FormattedMessage id="header.title" />
        </h1>
        <Introduction {...props} />
      </div>
    </div>
  </div>
  )
}

export default TopWithPicture