import React from "react";
import Link from "next/link";

import team from "../../data/teamMembers";

const Section = ({ language, year, availableLanguages }) => {
  return (
    <section className="TranslatorSection">
      <div className="container small-container">
        <TeamMemberList language={language} year={year} />
        {availableLanguages.length > 1 && (
          <OtherLanguages
            year={year}
            language={language}
            availableLanguages={availableLanguages}
          />
        )}
      </div>
    </section>
  );
};

const OtherLanguages = ({ year, language, availableLanguages }) => (
  <div style={{ marginTop: "2rem" }}>
    <p className="member-list-header">Available Translations</p>
    {availableLanguages
      .filter((lang) => lang.code !== language)
      .map((lang) => (
        <p key={lang.code}>
          <Link
            href={{
              pathname: "/[year]/[language]",
              query: { language: lang.code, year },
            }}
          >
            <a>{lang.text}</a>
          </Link>
        </p>
      ))}
  </div>
);

const TeamMemberList = ({ language, year }) => {
  const transWorks = team.translationWorks[year];
  const translators = ((transWorks && transWorks[language]) || []).map(
    (name) => team.translators[name]
  );

  const authors = Object.entries(team.authorWorks)
    .filter(([authorName, years]) => years.includes(year))
    .map(([authorName, years]) => team.authors[authorName]);

  return (
    <div>
      {translators.length > 0 && (
        <TranslatorBlock translators={translators} language={language} />
      )}
      <AuthorBlock authors={authors} />
    </div>
  );
};

const AuthorBlock = ({ authors }) => (
  <div>
    <p className="member-list-header">Authors</p>
    <div className="translator-list">
      {authors.map((author, i) => (
        <TeamMember key={i} member={author} key={author.name} />
      ))}
    </div>
  </div>
);

const translations = {
  ja: "Japanese version",
  zh: "Chinese (simplified) version",
  es: "Spanish version",
  id: "Bahasa Indonesia",
  ru: "Russian version",
};

const TranslatorBlock = ({ translators, language }) => (
  <div style={{ marginBottom: "2rem" }}>
    <p className="member-list-header">{translations[language]}</p>
    <div className="translator-list">
      {translators.map((translator) => (
        <TeamMember member={translator} key={translator.name} />
      ))}
    </div>
  </div>
);

const TeamMember = ({ member }) => (
  <div className="translator-list-item">
    <a href={member.url}>
      <img className="avatar" src={member.avatar} width="75" height="75" />
    </a>
    <div className="translator-item-body">
      <a href={member.url} className="translator-name">
        {member.name}
      </a>
      <div className="translator-bio">
        {member.bio1}
        {member.bio2 && <div>{member.bio2}</div>}
      </div>
    </div>
  </div>
);

export default Section;
