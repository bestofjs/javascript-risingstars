import React from 'react'
import team from '../../data/teamMembers'

const Section = ({ language }) => (
  <section className="TranslatorSection">
    <div className="container small-container">
      {language === 'en' ? (
        <OtherLanguages />
      ) : (
        <TeamMemberList language={language} />
      )}
    </div>
  </section>
)

const OtherLanguages = () => (
  <div style={{ textAlign: 'center' }}>
    <p>
      This article is also available in <a href="/ja/">Japanese</a> and in{' '}
      <a href="/zh/">Chinese (simplified)</a>.
    </p>
    <p>
      <a href="/ja/">日本語はこちら</a>です
    </p>
    <p>
      <a href="/zh/"> 简体中文版</a>
    </p>
  </div>
)

const TeamMemberList = ({ language }) => {
  const translators = team.filter(
    member => member.role === 'translation' && member.language === language
  )
  const author = team.find(member => member.role === 'author')
  return (
    <div>
      {language === 'ja' && (
        <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
          <img
            src={`/img/${language}/rising-stars.png`}
            className="img-responsive"
            alt="Rising Stars 2016"
          />
        </div>
      )}
      <TranslatorBlock translators={translators} language={language} />
      <AuthorBlock author={author} />
    </div>
  )
}

const AuthorBlock = ({ author }) => (
  <div style={{ marginTop: '2rem' }}>
    <p className="member-list-header" style={{ marginTop: '1rem' }}>
      <a href="/">Original version</a>
    </p>
    <div className="translator-list">
      <TeamMember member={author} key={author.name} />
    </div>
  </div>
)

const translations = {
  ja: 'Japanese translation',
  zh: 'Chinese (simplified) translation'
}

const TranslatorBlock = ({ translators, language }) => (
  <div>
    <p className="member-list-header">{translations[language]}</p>
    <div className="translator-list">
      {translators.map(translator => (
        <TeamMember member={translator} key={translator.name} />
      ))}
    </div>
  </div>
)

const TeamMember = ({ member }) => (
  <div className="translator-list-item">
    <a href={member.url}>
      <img src={member.avatar} width="75" height="75" />
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
)

export default Section
