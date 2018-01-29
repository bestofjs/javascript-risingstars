import React from 'react'
import Link from 'gatsby-link'
import svg from './globe.svg'

/*
Dropdown language menu used on small screens
*/

const DropDownMenu = ({ year, languages, currentLanguage, onChange }) => (
  <div className="language-menu-mobile">
    <div className="control has-icons-left">
      <div className="select">
        <select
          className="language-dropdown"
          onChange={onChange}
          style={{ width: 64 }}
        >
          <option />
          {languages.map(item => (
            <LanguageLink
              item={item}
              key={item.code}
              active={currentLanguage === item.code}
              year={year}
            />
          ))}
        </select>
      </div>
      <div className="icon is-left">
        <img src={svg} width="24" height="24" />
      </div>
    </div>
  </div>
)

const LanguageLink = ({ item, active, year }) => {
  if (active) return <option disabled>{item.text}</option>
  return <option value={`/${year}/${item.code}`}>{item.text}</option>
}

export default DropDownMenu
