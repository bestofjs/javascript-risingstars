import React from "react";
import { FormattedMessage } from "react-intl";

import { Guest } from "components/guest";
import ProjectTable from "./ProjectTable/ProjectTable";
import { TranslatedBlock } from "components/translated-block";

export const Category = ({
  projects,
  locale,
  translations,
  tag,
  number,
  excluded = [],
  guest,
  year,
  currentYear,
  intl,
  hasComment,
  count,
  ...props
}) => {
  if (!projects[tag]) throw new Error(`No projects with the tag "${tag}"`);
  const graphProjects = projects[tag].slice(0, count);
  const key = tag.replace(/-/gi, "");

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
              <ProjectTable
                {...props}
                count={count}
                tagKey={key}
                projects={graphProjects}
                year={year}
                showBlurb={tag !== "misc"}
                currentYear={currentYear}
                intl={intl}
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
