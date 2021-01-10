import React from "react";
import { FormattedMessage } from "react-intl";

import Social from "../Social";
import TranslatedBlock from "../../utils/TranslatedBlock";

const Introduction = ({ entities, url, intl, translations }) => (
  <div>
    <div className="introduction-text">
      <TranslatedBlock
        translations={translations}
        path="introduction"
        entities={entities}
      />
    </div>
    <hr />
    <p style={{ margin: "1rem 0 0" }}>
      <FormattedMessage
        id="introduction.explanation"
        defaultMessage={`
          We analyzed projects coming from {link},
        a curated list of the best projects related to the web platform.
        `}
        values={{
          link: <a href="https://bestofjs.org/">Best of JS</a>,
        }}
      />
    </p>
  </div>
);

export default Introduction;
