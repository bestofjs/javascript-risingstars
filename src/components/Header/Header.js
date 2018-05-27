import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link'

import svg from '../bestofjs.svg'
import octocat from './octocat.svg'
import FullSizeMenu from './FullSizeMenu'
import DropDownMenu from './DropDownMenu'

const Header = ({ language, year, availableLanguages }) => {
  const onChange = e => {
    const path = e.target.value
    navigateTo(path)
  }
  return (
    <div id="header">
      <div className="container">
        <div className="header-layout">
          <a id="logo" href="https://bestofjs.org">
            <img src={svg} width="160" alt="bestof.js.org logo" />
          </a>
          <FullSizeMenu
            currentLanguage={language}
            languages={availableLanguages}
            year={year}
          />
          <DropDownMenu
            currentLanguage={language}
            languages={availableLanguages}
            year={year}
            onChange={onChange}
          />
        </div>
      </div>
      <a
        href="https://github.com/bestofjs/javascript-risingstars"
        id="github-corner"
      >
        <img src={octocat} width={60} height={60} />
      </a>
    </div>
  )
}

export default Header
