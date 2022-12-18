import { FormattedMessage } from "react-intl";

import { Guest } from "components/guest";
import { ProjectList } from "components/project-list/project-list";
import { TranslatedBlock } from "components/translated-block";
import { PageProps } from "page-helpers";

type Props = Pick<PageProps, "language" | "projectsByTag" | "tags" | "year"> & {
  category: RisingStars.Category;
};
export const Category = ({
  category,
  language,
  projectsByTag,
  tags,
  year,
}: Props) => {
  const { availableComments, key: tag, limit, count, guest } = category;

  const projects = projectsByTag[tag];
  if (!projects) throw new Error(`No projects with the tag "${tag}"`);
  const graphProjects = projects.slice(0, count);
  const key = tag.replace(/-/gi, "");

  const hasComment = !availableComments || availableComments.includes(language);

  return (
    <section className="section">
      <div className={`container${hasComment ? "" : " small-container"}`}>
        <a id={`section-${tag}`} />
        <h2 className="project-category-header">
          <span className="project-category-header-inner">
            <FormattedMessage id={`categories.${key}`} />
          </span>
        </h2>
        <div className={`${hasComment ? "project-category-grid" : ""}`}>
          <div>
            <div className={`${hasComment ? "column1" : ""}`}>
              <ProjectList
                count={count}
                limit={limit || 5}
                tagKey={key}
                tags={tags}
                projects={graphProjects}
                year={year}
              />
            </div>
          </div>
          <div>
            {hasComment && (
              <div className="column2">
                <div className="tag-card-comments markdown-body">
                  {guest && <Guest guestId={guest} />}
                  <TranslatedBlock path={tag} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
