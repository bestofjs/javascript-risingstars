import { FormattedMessage } from "react-intl";

import { TranslatedBlock } from "components/translated-block";

export const Conclusion = () => (
  <div className="container small-container" id="conclusion">
    <div className="small-card conclusion">
      <div className="small-card-header">
        <h2 className="tag-card-header-text">
          <FormattedMessage id="conclusion" />
        </h2>
      </div>
      <div className="markdown-body">
        <TranslatedBlock path="conclusion" />
      </div>
    </div>
  </div>
);

export default Conclusion;
