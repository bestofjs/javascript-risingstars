import { FormattedMessage } from "react-intl";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>
          <FormattedMessage id="header.title" />
        </h1>
      </div>
    </div>
  );
};
