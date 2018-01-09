import React from 'react'
import { FormattedMessage } from 'react-intl'

import Social from './Social'
import TranslatedBlock from '../utils/TranslatedBlock'
import Newsletter from './Newsletter'

const Introduction = ({ entities, url, intl, translations, categories }) => (
  <div className="introduction-container container container-section">
    <div className="main-image">
      <img src="/img/risingstars.png"/>
    </div>
    <div className="introduction small-card markdown-body card-introduction">
      <div className="introduction-inner">
      <h1>
        <FormattedMessage id="header.title" />
      </h1>
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
  </div>
)

export default Introduction
