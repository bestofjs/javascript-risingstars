import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Helmet from 'react-helmet'

import Header from './components/Header'
import Footer from './components/Footer'
import TranslatorSection from './components/TranslatorSection'
import Introduction from './components/Introduction'
import Conclusion from './components/Conclusion'
import graphFactory from './components/graphFactory'
import ProjectIconWall from './components/ProjectIconWall' // Used to generate the icon
import BgPicture from './components/BgPicture'

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

class Page extends React.Component {
  render() {
    const {
      entities,
      url,
      projects,
      intl,
      translations,
      year,
      categories
    } = this.props
    const locale = intl.locale
    const factory = graphFactory({ projects, entities, locale, translations })
    const Graph = props => factory.createGraph(props)
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
          bodyAttributes={{ class: `year${year}` }}
        />
        {false && <BgPicture projects={projects.all} />}
        <Header language={intl.locale} year={year} />
        <div id="picture-block">
          <div className="container">
            <h1>
              <FormattedMessage id="header.title" />
            </h1>
          </div>
        </div>
        <Introduction
          entities={entities}
          url={url}
          intl={intl}
          translations={translations}
          categories={categories}
        />
        {false && <ProjectIconWall projects={projects.all} />}
        {categories.map((item, i) => (
          <Graph
            key={item.tag}
            tag={item.tag}
            number={i + 1}
            title={item.title}
            excluded={item.excluded}
            count={item.count}
          />
        ))}
        <Conclusion
          entities={entities}
          url={url}
          intl={intl}
          translations={translations}
        />
        <TranslatorSection language={intl.locale} />
        <Footer language={intl.locale} />
      </div>
    )
  }
}

export default injectIntl(Page)
