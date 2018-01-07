import React from 'react'
import { FormattedMessage } from 'react-intl'

import TranslatedBlock from '../utils/TranslatedBlock'

const Guest = ({ guestId, translations, language, entities }) => (
  <div className="evan">
    <div className="evan-blurb">
      <TranslatedBlock
        translations={translations}
        language={language}
        path={`guests.${guestId}`}
        entities={entities}
      />
    </div>
    <div className="evan-portrait">
      <img src={`/img/guests/${guestId}.jpg`} />
    </div>
  </div>
)

export default Guest
