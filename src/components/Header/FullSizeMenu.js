import React from "react";
import Link from "next/link";

const FullSizeMenu = ({ year, languages, currentLanguage }) => (
  <div className="language-menu">
    {languages.map((item) => (
      <LanguageLink
        item={item}
        key={item.code}
        active={currentLanguage === item.code}
        year={year}
      />
    ))}
  </div>
);

const LanguageLink = ({ item, active, year }) => {
  if (active) {
    return <span className="language-menu-item is-active">{item.text}</span>;
  }
  // Using `Link` raises warning in the console??
  // return (
  //   <Link href={`/${year}/${item.code}`}>
  //     <a className="language-menu-item">{item.text}</a>
  //   </Link>
  // );
  return (
    <a className="language-menu-item" href={`/${year}/${item.code}`}>
      {item.text}
    </a>
  );
};

export default FullSizeMenu;
