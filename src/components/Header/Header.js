import React from "react";
// import { navigateTo } from 'gatsby-link'

import FullSizeMenu from "./FullSizeMenu";
import DropDownMenu from "./DropDownMenu";

const Header = ({ language, year, availableLanguages }) => {
  const onChange = (e) => {
    const path = e.target.value;
    // navigateTo(path) TODO fix me!
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header-layout">
          <a id="logo" href="https://bestofjs.org">
            <img
              src={"https://bestofjs.org/svg/bestofjs.svg"}
              width="130"
              alt="Best of JS logo"
            />
          </a>
          <FullSizeMenu
            currentLanguage={language}
            languages={availableLanguages}
            year={year}
          />
          {availableLanguages.length > 3 && (
            <DropDownMenu
              currentLanguage={language}
              languages={availableLanguages}
              year={year}
              onChange={onChange}
            />
          )}
        </div>
      </div>
      <a
        href="https://github.com/bestofjs/javascript-risingstars"
        id="github-corner"
      >
        <img src="/octocat.svg" width={60} height={60} />
      </a>
    </div>
  );
};

export default Header;
