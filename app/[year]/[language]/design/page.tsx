import { fetchPageProps } from "~/fetch-page-props";
import { SocialImage } from "./graphics/social-image";
import { BackgroundImage } from "./graphics/background-image";

type PageProps = {
  params: {
    year: string;
    language: string;
  };
};
export default async function DesignPage({ params }: PageProps) {
  const year = parseInt(params.year, 0);
  const language = params.language;

  const mainPageProps = await fetchPageProps(year, language);
  const { projectsByTag } = mainPageProps;
  const projects = projectsByTag["all"];

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <h1>
        Design components - {year} - {language}
      </h1>
      <h2>Social Image (1280x640)</h2>
      <SocialImage year={year} language={language} projects={projects} />
      <hr />
      <h2>Background banner</h2>
      <BackgroundImage projects={projects} />
    </div>
  );
}

// TODO: We don't need Static Site Generation for this page that is used only to design elements
export function generateStaticParams() {
  return [{ year: (2022).toString(), language: "en" }];
}
