import React from "react";

import Banner from "./Banner";
import Introduction from "./Introduction";
import YearNavigator from "./YearNavigator";

const Top = (props) => {
  return (
    <div>
      <YearNavigator {...props} />
      <Banner />
      <div className="container small-container">
        <div className="top-with-banner-introduction">
          <Introduction {...props} />
        </div>
      </div>
    </div>
  );
};

export default Top;
