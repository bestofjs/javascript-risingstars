import React from "react";
import { useIntl } from "react-intl";
import Head from "next/head";

import Header from "components/Header";
import { Top } from "components/top/top";
import Footer from "components/Footer";
import TranslatorSection from "components/TranslatorSection";
import TOC from "components/TOC";
import { Conclusion } from "components/conclusion";
import { Category } from "components/category";

type Props = {
  entities: RisingStars.Entities;
  categories: RisingStars.Category[];
  projects: RisingStars.ProjectsByCategory;
  translations: RisingStars.IntlContent;
  year: number;
  currentYear: number;
  languages: RisingStars.Language[];
};

export const PageRoot = ({
  entities,
  projects,
  translations,
  year,
  currentYear,
  categories,
  languages,
}: Props) => {
  const intl = useIntl();
  const language = intl.locale;
  const title = intl.formatMessage({ id: "page.title" });
  const description = intl.formatMessage({ id: "page.description" });
  const rootURL = process.env.NEXT_PUBLIC_ROOT_URL || "";
  const pageURL = `${rootURL}/${year}/${language}`;
  const imageURL = `${rootURL}/img/${year}/${language}/rising-stars.png`; // Twitter needs an absolute URL?

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageURL} />
        <meta property="og:image" content={imageURL} />
        <meta name="twitter:image:src" content={imageURL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header language={language} year={year} availableLanguages={languages} />
      <Top />
      <div className="main">
        <div className="main-contents">
          <TOC projects={projects} categories={categories} />
          {categories
            .filter((item) => !item.disabled)
            .map((item, i) => (
              <Category
                key={item.key}
                tag={item.key}
                number={i + 1}
                projects={projects}
                entities={entities}
                locale={language}
                translations={translations}
                year={year}
                currentYear={currentYear}
                intl={intl}
                hasComment={
                  !item.availableComments ||
                  item.availableComments.includes(language)
                }
                guest={item.guest}
                count={item.count}
              />
            ))}
          <Conclusion />
        </div>
      </div>
      <TranslatorSection
        language={language}
        year={year}
        availableLanguages={languages}
      />
      <Footer language={language} />
    </>
  );
};
