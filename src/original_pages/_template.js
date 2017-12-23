import React from 'react'

import '../src/css/github.css'
import '../src/css/index.css'
import '../src/css/App.css'
import '../src/css/ProjectTable.css'
import '../src/css/social.css'
import '../src/css/Picture.css'
import '../src/css/TagCard.css'
import '../src/css/Header.css'
import '../src/css/Footer.css'
import '../src/css/TranslatorSection.css'

// export default ({ children }) => {
//   console.log('template', children);
//   return (
//   <div>
//     <p>template</p>
//     {children}
//   </div>
// )}

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any
    }
  },
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
