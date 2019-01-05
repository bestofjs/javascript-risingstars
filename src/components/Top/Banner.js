import React from 'react'
import { FormattedMessage } from 'react-intl'

const Banner = () => {
  return (
    <div id="picture-block">
      <div className="container">
        <h1 style={{textShadow: '0 3px 3px rgba(143,50,0,.99)'}}>
          <FormattedMessage id="header.title" />
        </h1>
      </div>
    </div>
  )
}

export default Banner
