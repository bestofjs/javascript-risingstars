import React from 'react'
import Link from 'gatsby-link'

import svg from './bestofjs.svg'

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
