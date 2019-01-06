import React from 'react'
import set from 'lodash.set'
import { IntlProvider, addLocaleData } from 'react-intl'
import __intlEN from 'react-intl/locale-data/en'
import __intlZH from 'react-intl/locale-data/zh'
import __intlJA from 'react-intl/locale-data/ja'
import __intlFR from 'react-intl/locale-data/fr'
import __intlES from 'react-intl/locale-data/es'
import __intlID from 'react-intl/locale-data/id'

import Page from './Page'
import getMessages from './utils/getMessages'
import appData from '../data'
import processProjectData from './utils/processProjectData'
import allSettings from '../data/settings.json'
import allLanguages from '../data/allLanguages.json'

const { siteMetadata } = require('../gatsby-config')

addLocaleData(__intlEN)
addLocaleData(__intlZH)
addLocaleData(__intlJA)
addLocaleData(__intlFR)
addLocaleData(__intlES)
addLocaleData(__intlID)

const getSettings = year =>
  allSettings.find(pageSettings => pageSettings.year === year)

class PageContainer extends React.Component {
  render() {
    const { data, pathContext } = this.props
    const { language, year } = pathContext
    console.log('Render the page', language, year)
    const messages = getMessages({ language, year })
    const translations = getAllTranslations({ edges: data.allFile.edges })[
      `year${year}`
    ]
    const { projects, categories } = appData[`year${year}`]
    const allYears = Object.keys(appData).map(key => parseInt(key.slice('year'.length)))
    const settings = getSettings(year)
    const availableLanguageCodes = settings.languages || ['en']
    const isAvailable = lang => availableLanguageCodes.includes(lang.code)
    const languages = allLanguages.filter(isAvailable)
    const { entities, projectsByTag } = processProjectData(projects, categories)
    const { url, currentYear } = siteMetadata
    const fullUrl = `${siteMetadata.url}/${year}/${language}`
    return (
      <IntlProvider locale={language} messages={messages}>
        <Page
          projects={projectsByTag}
          entities={entities}
          url={fullUrl}
          translations={translations}
          year={year}
          allYears={allYears}
          currentYear={currentYear}
          categories={categories}
          languages={languages}
        />
      </IntlProvider>
    )
  }
}
export default PageContainer

function getAllTranslations({ edges }) {
  const translations = {}
  const isTranslation = edge => edge.node.ext === '.md'
  edges.filter(isTranslation).forEach(element => {
    const { node } = element
    const { fields } = node
    const { key, language, markdown, year } = fields
    const path = `year${year}.${language}.${key}`
    set(translations, path, markdown)
  })
  return translations
}

export const query = graphql`
  query markdownTranslations {
    allFile(filter: { ext: { eq: ".md" } }) {
      totalCount
      edges {
        node {
          relativePath
          size
          base
          ext
          internal {
            contentDigest
          }
          fields {
            key
            language
            markdown
            year
          }
        }
      }
    }
  }
`
