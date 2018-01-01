import React from 'react'
import { FormattedMessage } from 'react-intl'

import Social from './Social'
import TranslatedBlock from '../utils/TranslatedBlock'

const Introduction = ({ entities, url, intl, translations, categories }) => (
  <div className="container container-section small-container">
    <div className="small-card markdown-body card-introduction">
      {false && <Markdown source={md[intl.locale].body} entities={entities} />}
      <TranslatedBlock
        translations={translations}
        language={intl.locale}
        path="introduction"
        entities={entities}
      />
      <hr />
      <div>
        <Social url={url} text={intl.formatMessage({ id: 'social.text' })} />
      </div>
      <hr />
      <small>
        <p style={{ marginTop: '1rem' }}>
          <FormattedMessage
            id="introduction.explanation"
            defaultMessage={`
              We analyzed projects coming from {link},
            a curated list of the best projects related to the web platform.
            `}
            values={{
              link: <a href="https://bestof.js.org/">bestof.js.org</a>
            }}
          />
        </p>
      </small>
    </div>
  </div>
)

export default Introduction
