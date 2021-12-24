import { useIntl } from "react-intl";
import Head from "next/head";

import { Header } from "components/header";
import { Top } from "components/top/top";
import { TableOfContents } from "components/table-of-contents";
import { Category } from "components/category";
import { Conclusion } from "components/conclusion";
import { TranslatorSection } from "components/translator-section";
import { Footer } from "components/footer";

type Props = {
  categories: RisingStars.Category[];
  projects: RisingStars.ProjectsByCategory;
  year: number;
  languages: RisingStars.Language[];
};

export const PageRoot = ({ projects, year, categories, languages }: Props) => {
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
          <TableOfContents projects={projects} categories={categories} />
          {categories
            .filter((category) => !category.disabled)
            .map((category) => (
              <Category
                key={category.key}
                year={year}
                category={category}
                language={language}
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
      <Footer />
    </>
  );
};
