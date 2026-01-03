import { getProjectData } from "~/fetch-page-props";
import type { LanguageCode, RawProject } from "~/schema";
import { getProjectsBySlug } from "./process-project-data";
import { getCollection } from "astro:content";

export async function getProcessedCategoryMarkdown({
  year,
  language,
  id,
  isTruncated,
}: {
  year: number;
  language: LanguageCode;
  id: string;
  isTruncated: boolean;
}) {
  const comments = await getCollection("comments");
  const comment = comments.find(
    (comment) => comment.id === `${year}/${language}/${id}`,
  );

  if (!comment) throw new Error(`Content not found: ${year}/${language}/${id}`);
  if (!comment.body) throw new Error(`Empty comment ${year}/${language}/${id}`);

  const { projects } = await getProjectData(year);
  const projectsBySlug = getProjectsBySlug(projects);

  const processed = replaceProjectSlugsWithLinks(projectsBySlug, comment.body);
  return isTruncated ? truncateMarkdown(processed) : processed;
}

export function replaceProjectSlugsWithLinks(
  projectsBySlug: Map<string, RawProject>,
  md: string,
) {
  const processed = md.replace(/{(.+?)}/gi, (_, slug) => {
    const project = projectsBySlug.get(slug.toLowerCase());
    if (!project) {
      return slug;
    }
    const url = project.url || `https://github.com/${project.full_name}`;
    return `[${project.name}](${url})`;
  });
  return processed;
}

export function truncateMarkdown(md: string) {
  const firstSeparator = md.indexOf("<!-- MORE -->");
  if (firstSeparator === -1) {
    return md;
  }
  return md.substring(0, firstSeparator);
}
