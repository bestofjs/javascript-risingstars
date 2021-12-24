import { FormattedMessage } from "react-intl";

import { TranslatedBlock } from "components/translated-block";

export const Introduction = () => (
  <div>
    <div className="introduction-text">
      <TranslatedBlock path="introduction" />
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
