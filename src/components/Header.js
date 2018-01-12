import React from 'react'
import Link from 'gatsby-link'

import svg from './bestofjs.svg'
import octocat from './octocat.svg'

const Header = ({ language, year, availableLanguages }) => {
  return (
    <div id="header">
      <div className="container small-container">
        <div className="header-layout">
          <a id="logo" href="https://bestof.js.org">
            <img src={svg} width="160" alt="bestof.js.org logo" />
          </a>
          <div className="language-menu">
            {availableLanguages.map(item => (
              <LanguageLink
                item={item}
                key={item.code}
                active={language === item.code}
                year={year}
              />
            ))}
          </div>
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

const LanguageLink = ({ item, active, year }) => {
  if (active)
    return <span className="language-menu-item is-active">{item.text}</span>
  return (
    <Link to={`/${year}/${item.code}`} className="language-menu-item">
      {item.text}
    </Link>
  )
}

export default Header
