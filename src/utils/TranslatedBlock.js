import React from 'react'
import get from 'lodash.get'

import Markdown from './Markdown'

const TranslatedBlock = ({ translations, path, language, entities }) => {
  const markdown =
    get(translations[language], path) ||
    `No translation for this path: "${path}"`
  // return <div dangerouslySetInnerHTML={{ __html: html }} />
  return <Markdown source={markdown} entities={entities} />
}

export default TranslatedBlock
