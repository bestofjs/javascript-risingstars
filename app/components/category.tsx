import { MainPageProps } from "~/fetch-page-props";
import { useTranslation } from "~/i18n";
import { TranslatedBlock } from "~/translated-block";
import { ProjectList } from "./project-list/project-list";
import { ProjectRankings } from "./project-list/project-rankings.client";
import { Guest } from "./guest";

type Props = Pick<
  MainPageProps,
  "language" | "projectsByTag" | "tags" | "year"
> & {
  category: RisingStars.Category;
};
export async function Category({
  category,
  language,
  projectsByTag,
  tags,
  year,
}: Props) {
  const { t } = await useTranslation(language, year);
  const defaultLimit = 5;
  const {
    availableComments,
    key: tag,
    limit = defaultLimit,
    count,
    guest,
  } = category;

  const projects = projectsByTag[tag];
  if (!projects) throw new Error(`No projects with the tag "${tag}"`);
  const topProjects = projects.slice(0, limit);
  const extraProjects = projects.slice(limit, count);
  const key = tag.replace(/-/gi, "");

  const hasComment = !availableComments || availableComments.includes(language);

  return (
    <section className="section">
      <div className={`container${hasComment ? "" : " small-container"}`}>
        <a id={`section-${tag}`} />
        <h2 className="project-category-header">
          <span className="project-category-header-inner">
            {t(`categories.${key}`)}
          </span>
        </h2>
        <div className={`${hasComment ? "project-category-grid" : ""}`}>
          <div>
            <div className={`${hasComment ? "column1" : ""}`}>
              <ProjectRankings
                renderTopProjects={
                  <ProjectList
                    projects={topProjects}
                    isFirstItemOpenByDefault={tag === "all"}
                    language={language}
                    tags={tags}
                    year={year}
                  />
                }
                renderExtraProjects={
                  /* @ts-expect-error Server Component */
                  <ProjectList
                    projects={extraProjects}
                    language={language}
                    tags={tags}
                    year={year}
                    offset={limit}
                  />
                }
              />
            </div>
          </div>
          <div>
            {hasComment && (
              <div className="column2">
                <div className="tag-card-comments markdown-body">
                  {guest && (
                    <Guest guestId={guest} year={year} language={language} />
                  )}
                  {/* @ts-expect-error */}
                  <TranslatedBlock
                    id={"categories/" + tag}
                    year={year}
                    language={language}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
