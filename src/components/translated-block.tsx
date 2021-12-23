import React from "react";
import ReactMarkdown from "react-markdown";
import get from "lodash/get";

import { useAppData } from "app-data";

export const TranslatedBlock = ({ path }: { path: string }) => {
  const { entities, translations } = useAppData();
  const markdown =
    get(translations, path) || `No translation for this path: "${path}"`;

  const source = processMarkdown(entities, markdown);

  return <ReactMarkdown source={source} />;
};

function processMarkdown(entities: RisingStars.Entities, md: string) {
  const processed = md.replace(/{(.+?)}/gi, (_, slug) => {
    const project = entities[slug];
    if (!project) {
      return slug;
    }
    const url = project.url || project.repository;
    return `[${project.name}](${url})`;
  });
  return processed;
}
