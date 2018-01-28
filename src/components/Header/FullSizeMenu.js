import React from 'react'
import Link from 'gatsby-link'

const FullSizeMenu = ({ year, languages, currentLanguage }) => (
  <div className="language-menu">
    {languages.map(item => (
      <LanguageLink
        item={item}
        key={item.code}
        active={currentLanguage === item.code}
        year={year}
      />
    ))}
  </div>
)

const LanguageLink = ({ item, active, year }) => {
  if (active)
    return <span className="language-menu-item is-active">{item.text}</span>
  return (
    <Link to={`/${year}/${item.code}`} className="language-menu-item">
      {item.text}
    </Link>
  )
}

export default FullSizeMenu
