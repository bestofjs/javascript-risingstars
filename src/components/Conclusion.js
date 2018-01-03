import React from 'react'
import { FormattedMessage } from 'react-intl'

// import Markdown from './Markdown'
import Social from './Social'
import TranslatedBlock from '../utils/TranslatedBlock'

const Conclusion = ({ entities, url, intl, translations }) => (
  <div className="container small-container">
    <div className="small-card conclusion">
      <div className="small-card-header">
        <h2 className="tag-card-header-text">
          <FormattedMessage id="conclusion" />
        </h2>
      </div>
      <div className="markdown-body">
        {false && (
          <Markdown source={md[intl.locale].body} entities={entities} />
        )}
        <TranslatedBlock
          translations={translations}
          language={intl.locale}
          path="conclusion"
          entities={entities}
        />
        <div className="conclusion-share-buttons">
          <Social url={url} text={intl.formatMessage({ id: 'social.text' })} />
        </div>
      </div>
    </div>
  </div>
)

export default Conclusion
