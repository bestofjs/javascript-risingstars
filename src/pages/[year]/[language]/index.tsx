import flatten from "lodash/flatten";
import { IntlProvider } from "react-intl";

import settings from "~/data/settings.json";
import { PageRoot } from "components/page-root";
import { getPageProps, PageProps } from "page-helpers";
import { AppDataContainer } from "app-data";

const Root = ({
  year,
  language,
  projectsBySlug,
  projectsByTag,
  tags,
  messages,
  translations,
  allYears,
  languages,
  categories,
}: PageProps) => {
  return (
    <IntlProvider locale={language} messages={messages} defaultLocale="en">
      <AppDataContainer.Provider
        initialState={{
          allYears,
          year,
          projectsBySlug,
          translations,
          projectsByTag,
          tags,
        }}
      >
        <PageRoot
          projectsByTag={projectsByTag}
          year={year}
          allYears={allYears}
          categories={categories}
          languages={languages}
          tags={tags}
        />
      </AppDataContainer.Provider>
    </IntlProvider>
  );
};

export default Root;

export function getStaticPaths() {
  const paths = flatten(
    settings.map(({ year, languages }) =>
      languages.map((language) => ({ year: year.toString(), language }))
    )
  ).map(({ year, language }) => ({ params: { year, language } }));

  return {
    paths,
    // paths: [
    //   { params: { year: "2019", language: "en" } },
    //   { params: { year: "2019", language: "ja" } },
    // ],
    fallback: false,
  };
}
type Params = {
  params: {
    year: string;
    language: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { year: yearParam, language } = params;
  const year = parseInt(yearParam, 0);

  const props = await getPageProps(year, language);
  return {
    props,
  };
}
