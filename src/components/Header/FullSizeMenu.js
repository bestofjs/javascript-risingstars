import React from "react";
import Link from "next/link";

const FullSizeMenu = ({ year, languages, currentLanguage }) => (
  <div className="language-menu">
    {languages.map((lang) => (
      <LanguageLink
        lang={lang}
        key={lang.code}
        active={currentLanguage === lang.code}
        year={year}
      />
    ))}
  </div>
);

const LanguageLink = ({ lang, active, year }) => {
  if (active) {
    return <span className="language-menu-item is-active">{lang.text}</span>;
  }
  return (
    <Link
      href={{
        pathname: "/[year]/[language]",
        query: { language: lang.code, year },
      }}
    >
      <a className="language-menu-item">{lang.text}</a>
    </Link>
  );
};

export default FullSizeMenu;
