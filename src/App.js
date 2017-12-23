import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'

import TranslatedBlock from './utils/TranslatedBlock'

import './css/github.css'
import './css/index.css'
import './css/App.css'
import './css/ProjectTable.css'
import './css/social.css'
import './css/Picture.css'
import './css/TagCard.css'
import './css/Header.css'
import './css/Footer.css'
import './css/TranslatorSection.css'

import Page from './Page'
// const Page = ({ translations }) => (
//   <div>
//     Page!{' '}
//     <TranslatedBlock
//       path="introduction"
//       translations={translations}
//       language="en"
//     />
//   </div>
// )

class App extends React.Component {
  render() {
    const { intl, translations } = this.props
    const title = intl.formatMessage({ id: 'page.title' })
    const description = intl.formatMessage({ id: 'page.description' })
    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { property: 'og:type', content: 'article' },
            {
              property: 'og:image',
              content: `/img/${intl.locale}/rising-stars.png`
            }
          ]}
          htmlAttributes={{ lang: intl.locale }}
        />
        <Page {...this.props} />
      </div>
    )
  }
}

export default injectIntl(App)
