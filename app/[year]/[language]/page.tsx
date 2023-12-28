import { flatten } from "lodash";

import settings from "~/settings/years-setup.json";
import { fetchPageProps } from "~/fetch-page-props";
import { Header } from "~/components/header";
import { Top } from "~/components/top/top";
import { TableOfContents } from "~/components/table-of-contents";
import { Footer } from "~/components/footer/footer";
import { Conclusion } from "~/components/conclusion";
import { TranslatorSection } from "~/components/translator-section";
import { TranslatedBlock } from "~/translated-block";
import { CategoryLoader } from "~/components/category-loader";
import { Suspense } from "react";
import { Dummy } from "~/components/dummy";

type PageProps = {
  params: {
    year: string;
    language: string;
  };
  searchParams: any;
};
export default async function MainPage({ params, searchParams }: PageProps) {
  const year = parseInt(params.year, 0);
  const language = params.language;

  const {
    allYears,
    projectsByTag,
    projectsBySlug,
    categories,
    languages,
    tags,
  } = await fetchPageProps(year, language);

  return (
    <>
      <Header language={language} year={year} availableLanguages={languages} />
      <Top
        year={year}
        language={language}
        allYears={allYears}
        content={
          <TranslatedBlock
            id="introduction"
            language={language}
            year={year}
            projectsBySlug={projectsBySlug}
          />
        }
      />
      <div className="main">
        <TableOfContents
          projects={projectsByTag}
          categories={categories}
          language={language}
          year={year}
        />

        {categories
          .filter((category) => !category.disabled)
          .map((category) => {
            const categoryYear = searchParams[category.key]
              ? parseInt(searchParams[category.key], 0)
              : year;
            return (
              <Suspense
                key={category.key}
                fallback={<div>Loading `{category.key}`...</div>}
              >
                <CategoryLoader
                  key={category.key}
                  year={categoryYear}
                  category={category}
                  language={language}
                  tags={tags}
                  allYears={allYears}
                  content={
                    <TranslatedBlock
                      id={"categories/" + category.key}
                      year={categoryYear}
                      language={language}
                      projectsBySlug={projectsBySlug}
                    />
                  }
                  guestContent={
                    category.guest ? (
                      <TranslatedBlock
                        id={`guests/${category.guest}`}
                        language={language}
                        year={year}
                        projectsBySlug={projectsBySlug}
                      />
                    ) : null
                  }
                />
              </Suspense>
            );
          })}
      </div>

      <Conclusion
        language={language}
        year={year}
        content={
          <TranslatedBlock
            id="conclusion"
            year={year}
            language={language}
            projectsBySlug={projectsBySlug}
          />
        }
      />

      <TranslatorSection
        language={language}
        year={year}
        availableLanguages={languages}
      />
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  const params = flatten(
    settings.map(({ year, languages }) =>
      languages.map((language) => ({ year: year.toString(), language }))
    )
  ).map(({ year, language }) => ({ year, language }));
  return params;
}
