import fs from "fs-extra";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  id: string;
  year: number;
  language: string;
  projectsBySlug: Map<string, RisingStars.Project>;
};

export async function TranslatedBlock({
  id,
  year,
  language,
  projectsBySlug,
}: Props) {
  const rawContent = await fetchMarkdown(id, year, language);
  const processedContent = replaceProjectSlugsWithLinks(
    projectsBySlug,
    rawContent
  );

  const html = await markdownToHtml(processedContent);

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

function replaceProjectSlugsWithLinks(
  projectsBySlug: Map<string, RisingStars.Project>,
  md: string
) {
  const processed = md.replace(/{(.+?)}/gi, (_, slug) => {
    const project = projectsBySlug.get(slug);
    if (!project) {
      return slug;
    }
    const url = project.url || project.repository;
    return `[${project.name}](${url})`;
  });
  return processed;
}
