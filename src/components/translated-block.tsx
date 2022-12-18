import ReactMarkdown from "react-markdown";
import get from "lodash/get";

import { useAppData } from "app-data";

export const TranslatedBlock = ({ path }: { path: string }) => {
  const { projectsBySlug, translations } = useAppData();
  const markdown =
    get(translations, path) || `No translation for this path: "${path}"`;

  const source = processMarkdown(projectsBySlug, markdown);

  return <ReactMarkdown source={source} />;
};

function processMarkdown(projectsBySlug: RisingStars.Entities, md: string) {
  const processed = md.replace(/{(.+?)}/gi, (_, slug) => {
    const project = projectsBySlug[slug];
    if (!project) {
      return slug;
    }
    const url = project.url || project.repository;
    return `[${project.name}](${url})`;
  });
  return processed;
}
