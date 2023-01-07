import Link from "next/link";

import {
  authors,
  authorWorks,
  translators,
  translationWorks,
} from "../../data/teamMembers";

type Props = {
  language: string;
  year: number;
  availableLanguages: RisingStars.Language[];
};
export const TranslatorSection = ({
  language,
  year,
  availableLanguages,
}: Props) => {
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
            {lang.text}
          </Link>
        </p>
      ))}
  </div>
);

const TeamMemberList = ({ language, year }) => {
  const transWorks = translationWorks[year];
  const thisYearTranslators = ((transWorks && transWorks[language]) || []).map(
    (name) => translators[name]
  );

  const thisYearAuthors = Object.entries(authorWorks)
    .filter(([_, years]) => years.includes(year))
    .map(([authorName, _]) => authors[authorName]);

  return (
    <div>
      {thisYearTranslators.length > 0 && (
        <TranslatorBlock
          translators={thisYearTranslators}
          language={language}
        />
      )}
      <AuthorBlock authors={thisYearAuthors} />
    </div>
  );
};

const AuthorBlock = ({ authors }) => (
  <div>
    <p className="member-list-header">Authors</p>
    <div className="translator-list">
      {authors.map((author) => (
        <TeamMember key={author.name} member={author} />
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
  ko: "Korean version",
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
    <a href={member.url} aria-label={member.name}>
      <img className="avatar" src={member.avatar} width="75" height="75" alt={member.name} />
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
