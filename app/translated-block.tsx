import fs from "fs-extra";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function TranslatedBlock({
  id,
  year,
  language,
}: {
  id: string;
  year: number;
  language: string;
}) {
  const content = await fetchMarkdown(id, year, language);
  const html = await markdownToHtml(content);
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

async function fetchMarkdown(id: string, year: number, language: string) {
  const relativeFilePath = path.join(
    ["i18n", "md", "collections", year, language, id + ".md"].join("/")
  );
  const filepath = path.resolve(process.cwd(), relativeFilePath);
  const fileContents = await fs.readFile(filepath, "utf8");
  const { content } = matter(fileContents);
  return content;
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// export const TranslatedBlock = ({ path }: { path: string }) => {
//   const { projectsBySlug, translations } = useAppData();
//   const markdown =
//     get(translations, path) || `No translation for this path: "${path}"`;

//   const source = processMarkdown(projectsBySlug, markdown);

//   return <ReactMarkdown source={source} />;
// };

// function processMarkdown(projectsBySlug: RisingStars.Entities, md: string) {
//   const processed = md.replace(/{(.+?)}/gi, (_, slug) => {
//     const project = projectsBySlug[slug];
//     if (!project) {
//       return slug;
//     }
//     const url = project.url || project.repository;
//     return `[${project.name}](${url})`;
//   });
//   return processed;
// }
