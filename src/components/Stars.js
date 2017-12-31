import React from 'react'
import svg from './star.svg'
import formatDelta from '../utils/formatDelta';

const Stars = ({ value, decimals }) => {
  return (
    <span className="stars">
      +{formatDelta(value, decimals)}
      <img className="star" src={svg} alt="☆" width="14" height="16" />
    </span>
  )
}
export default Stars
