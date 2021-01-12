import React from "react";
import { FormattedMessage } from "react-intl";

import TranslatedBlock from "./TranslatedBlock";

const Guest = ({ guestId, translations, language, entities }) => (
  <div className="guest">
    <div className="guest-blurb">
      <TranslatedBlock
        translations={translations}
        path={guestId}
        entities={entities}
      />
    </div>
    <div className="guest-portrait">
      <img src={`/img/guests/${guestId}.jpg`} />
    </div>
  </div>
);

export default Guest;
