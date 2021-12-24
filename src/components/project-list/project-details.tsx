import tinytime from "tinytime";
import { FormattedMessage } from "react-intl";

import { ProjectChart } from "./project-chart";

const templateMonthYear = tinytime("{Mo}/{YYYY}");

type Props = {
  project: RisingStars.Project;
  isOpen: boolean;
};
export const ProjectDetails = ({ project, isOpen }: Props) => {
  return (
    <div className={`project-details ${isOpen ? "is-open" : "is-closed"}`}>
      <div className="project-details-inner">
        <ProjectChart project={project} />
        <ul className="project-links">
          <li>
            <span className="project-created-at">
              <FormattedMessage
                id="common.view_project.created"
                defaultMessage={`Created`}
              />{" "}
              {templateMonthYear.render(new Date(project.created_at))}
            </span>
          </li>
          <li>
            <a href={project.repository}>GitHub</a>
          </li>
          <li>
            <a href={`https://bestofjs.org/projects/${project.slug}`}>
              BestOfJS
            </a>
          </li>
          {project.url && (
            <li>
              <a href={project.url}>
                <FormattedMessage
                  id="common.view_project.homepage"
                  defaultMessage={`Homepage`}
                />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
