import React from 'react'
import TopWithBanner from './TopWithBanner'
import TopWithPicture from './TopWithPicture'

const Top = props => {
  const { year } = props
  const Component = false ? TopWithPicture : TopWithBanner
  return <Component {...props} />
}

export default Top
