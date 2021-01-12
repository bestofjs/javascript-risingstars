import React from "react";
import { FormattedMessage } from "react-intl";

import TranslatedBlock from "./TranslatedBlock";

const Conclusion = ({ entities, url, intl, translations }) => (
  <div className="container small-container" id="conclusion">
    <div className="small-card conclusion">
      <div className="small-card-header">
        <h2 className="tag-card-header-text">
          <FormattedMessage id="conclusion" />
        </h2>
      </div>
      <div className="markdown-body">
        <TranslatedBlock
          translations={translations}
          path="conclusion"
          entities={entities}
        />
      </div>
    </div>
  </div>
);

export default Conclusion;
