import React from 'react'
import { FormattedMessage } from 'react-intl'

const Evan = () => (
  <div className="evan">
    <div className="evan-blurb">
      <h3>Guest Writer: <a href="https://twitter.com/youyuxi">Evan You</a></h3>
      <p>As much as we admire Vue.js, we have to admit we're not that familiar with its ecosystem. </p>
      
      <p>That's why we looked for an expert to give us their opinion on this year's stats, and who better than the creator of Vue.js himself?</p>
    </div>
    <div className="evan-portrait">
      <img src="/img/evan.jpg"/>
    </div>
  </div>
)

export default Evan
