import React from 'react'
import { FormattedMessage } from 'react-intl'

import Header from './components/Header'
import Footer from './components/Footer'
import TranslatorSection from './components/TranslatorSection'
import Introduction from './components/Introduction'
import Conclusion from './components/Conclusion'
import graphFactory from './components/graphFactory'
import ProjectIconWall from './components/ProjectIconWall' // Used to generate the icon

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
    return (
      <div>
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

export default Page
