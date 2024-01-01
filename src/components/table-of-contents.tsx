import { FormattedMessage } from "react-intl";

import { ProjectAvatar } from "./project-avatar";

type Props = {
  categories: RisingStars.Category[];
  projects: RisingStars.ProjectsByCategory;
};
export const TableOfContents = ({ categories, projects }: Props) => (
  <div className="toc nav container container-section small-container">
    <h2 className="toc-header">
      <FormattedMessage id="introduction.table_of_contents" />
    </h2>

    <ol>
      {categories
        .filter((item) => !item.disabled)
        .map((item, i) => {
          const key = item.key.replace(/-/gi, "");
          return (
            <li key={key}>
              <a className="toc-link" href={`#section-${item.key}`}>
                <span className="toc-link-label">
                  <FormattedMessage id={`categories.${key}`} />
                </span>
                <div className="toc-projects">
                  {projects[item.key]
                    .slice(0, getMinCount(item.count, i))
                    .map((project) => (
                      <ProjectAvatar
                        key={project.slug}
                        project={project}
                        size={30}
                      />
                    ))}
                </div>
              </a>
            </li>
          );
        })}
      <li>
        <a className="toc-link toc-link-conclusion" href={`#conclusion`}>
          <FormattedMessage id="conclusion" />
        </a>
      </li>
    </ol>
  </div>
);

const getMinCount = (count, index) => {
  return index === 0 ? Math.min(count, 10) : Math.min(count, 5);
};
