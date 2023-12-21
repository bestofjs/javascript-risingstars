import { flatten } from "lodash";

import settings from "~/settings/years-setup.json";
import { fetchPageProps } from "~/fetch-page-props";
import { Header } from "~/components/header";
import { Top } from "~/components/top/top";
import { TableOfContents } from "~/components/table-of-contents";
import { Category } from "~/components/category";
import { Footer } from "~/components/footer/footer";
import Conclusion from "~/components/conclusion";
import { TranslatorSection } from "~/components/translator-section";

type PageProps = {
  params: {
    year: string;
    language: string;
  };
};
export default async function MainPage({ params }: PageProps) {
  const year = parseInt(params.year, 0);
  const language = params.language;

  const mainPageProps = await fetchPageProps(year, language);
  const { allYears, projectsByTag, categories, languages, tags } =
    mainPageProps;

  return (
    <>
      <Header language={language} year={year} availableLanguages={languages} />
      <Top year={year} language={language} allYears={allYears} />
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
            return (
              <Category
                key={category.key}
                year={year}
                category={category}
                language={language}
                projectsByTag={projectsByTag}
                tags={tags}
              />
            );
          })}
      </div>

      <Conclusion language={language} year={year} />

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
