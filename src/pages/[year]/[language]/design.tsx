import { getPageProps, PageProps } from "page-helpers";
import { SocialImage } from "components/graphics/social-image";
import { BackgroundImage } from "components/graphics/background-image";

const excludedProjects = ["draw-a-ui"];

export default function DesignPage({
  year,
  language,
  projectsByTag,
}: PageProps) {
  const projects = projectsByTag["all"].filter(
    (project) => !excludedProjects.includes(project.slug)
  );
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <h1>
        Design components - {year} - {language}
      </h1>
      <h2>Social Image (1280x640)</h2>
      <SocialImage year={year} language={language} projects={projects} />
      <hr />
      <h2>Background banner (1200x300)</h2>
      <BackgroundImage projects={projects} />
    </div>
  );
}

type Params = {
  params: {
    year: string;
    language: string;
  };
};

// We don't need Static Site Generation for this page that is used only to design elements
export async function getServerSideProps({ params }: Params) {
  const { year: yearParam, language } = params;
  const year = parseInt(yearParam, 0);

  const props = await getPageProps(year, language);

  return {
    props,
  };
}
