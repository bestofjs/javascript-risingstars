const fs = require('fs-extra')
const path = require('path')
const flatten = require('lodash.flatten')

const config = require('../../gatsby-config')
const getHtml = require('./html')
const settings = require('../../data/settings.json')

const defaultYear = 2017
const defaultLanguage = 'en'

function buildURL({ year, language, pathPrefix }) {
  return [pathPrefix ? pathPrefix : '/', year, language]
    .filter(item => !!item)
    .join('/')
}

function createAllRedirectPages() {
  const { pathPrefix } = config
  const years = settings.map(item => item.year)
  // Root redirect `/` => `/2017/en/`
  const rootRedirect = {
    redirectFrom: [],
    redirectTo: buildURL({
      pathPrefix,
      year: defaultYear,
      language: defaultLanguage
    })
  }
  // All year redirects `/2017/` => `/2017/en/`
  const yearRedirects = years.map(year => ({
    redirectFrom: [year.toString()],
    redirectTo: buildURL({
      pathPrefix,
      year,
      language: defaultLanguage
    })
  }))
  return Promise.all(
    [].concat(rootRedirect, yearRedirects).map(createRedirectPage)
  )
}

async function createRedirectPage({ redirectFrom, redirectTo }) {
  const html = getHtml({ redirectTo })
  const parts = [].concat(['public'], redirectFrom, ['index.html'])
  const filepath = path.join(process.cwd(), ...parts)
  console.log({ filepath })

  return fs.writeFile(filepath, html)
}

module.exports = createAllRedirectPages
