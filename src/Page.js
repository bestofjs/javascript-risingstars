import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import Head from "next/head";

import Header from "./components/Header";
import Top from "./components/Top";
import Footer from "./components/Footer";
import TranslatorSection from "./components/TranslatorSection";
import Newsletter from "./components/Newsletter";
import TOC from "./components/TOC";
import Conclusion from "./components/Conclusion";
import Category from "./components/Category";
import ProjectIconWall from "./components/ProjectIconWall"; // Used to generate the icon
import BgPicture from "./components/BgPicture";

const Page = ({
  entities,
  url,
  projects,
  intl,
  translations,
  year,
  allYears,
  currentYear,
  categories,
  languages,
}) => {
  const locale = intl.locale;
  const title = intl.formatMessage({ id: "page.title" });
  const description = intl.formatMessage({ id: "page.description" });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`/img/${year}/${intl.locale}/rising-stars.png`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <Header
        language={intl.locale}
        year={year}
        availableLanguages={languages}
      />
      <Top
        entities={entities}
        url={url}
        intl={intl}
        translations={translations}
        categories={categories}
        year={year}
        allYears={allYears}
        currentYear={currentYear}
      />
      {false && <BgPicture projects={projects.all} />}
      {false && (
        <ProjectIconWall
          projects={projects.all}
          lang={intl.locale}
          year={year}
        />
      )}
      <div className="main">
        <div className="main-contents">
          <TOC
            projects={projects}
            entities={entities}
            url={url}
            intl={intl}
            translations={translations}
            categories={categories}
          />
          {categories
            .filter((item) => !item.disabled)
            .map((item, i) => (
              <Category
                key={item.key}
                tag={item.key}
                number={i + 1}
                projects={projects}
                entities={entities}
                locale={locale}
                translations={translations}
                year={year}
                currentYear={currentYear}
                intl={intl}
                hasComment={
                  !item.availableComments ||
                  item.availableComments.includes(locale)
                }
                {...item}
              />
            ))}
          <Conclusion
            entities={entities}
            url={url}
            intl={intl}
            translations={translations}
          />
        </div>
      </div>
      <Newsletter intl={intl} />
      <TranslatorSection
        language={intl.locale}
        year={year}
        availableLanguages={languages}
      />
      <Footer language={intl.locale} />
    </div>
  );
};

export default injectIntl(Page);
