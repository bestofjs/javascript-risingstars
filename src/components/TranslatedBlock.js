import React from "react";
import ReactMarkdown from "react-markdown";
import get from "lodash.get";

const TranslatedBlock = ({ translations, path, entities }) => {
  const markdown =
    get(translations, path) || `No translation for this path: "${path}"`;

  const source = processMarkdown(entities, markdown);

  return <ReactMarkdown source={source} />;
};

function processMarkdown(entities, md) {
  const processed = md.replace(/{(.+?)}/gi, (match, slug) => {
    const project = entities[slug];
    if (!project) {
      return slug;
    }
    const url = project.url || project.repository;
    return `[${project.name}](${url})`;
  });
  return processed;
}

export default TranslatedBlock;
