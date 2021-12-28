import { useState } from "react";

import { ProjectSummary } from "./project-summary";
import { ProjectDetails } from "./project-details";

type Props = {
  year: number;
  tagKey: string;
  projects: RisingStars.Project[];
  limit: number;
  count: number;
};
export const ProjectList = ({
  projects,
  limit = 5,
  count,
  tagKey,
  year,
}: Props) => {
  const [showFullList, toggleFullList] = useState(false);
  const maxDelta = Math.max(...projects.map((project) => project.delta));

  const visibleProjects = showFullList ? projects : projects.slice(0, limit);
  const hasMoreItems = count > limit;
  return (
    <div>
      <div className="project-table">
        {visibleProjects.map((project, i) => (
          <ProjectListItem
            key={project.slug}
            tagKey={tagKey}
            maxDelta={maxDelta}
            project={project}
            year={year}
            index={i + 1}
          />
        ))}
      </div>
      {!showFullList && hasMoreItems && (
        <button
          className="button"
          type="button"
          onClick={() => toggleFullList(true)}
          style={{ display: "block", width: "100%", marginTop: "1rem" }}
        >
          SHOW MORE
        </button>
      )}
    </div>
  );
};

const ProjectListItem = ({ maxDelta, project, tagKey, year, index }) => {
  // only first project of "all" category should start expanded
  const defaultIsOpen = tagKey === "all" && index === 1;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const widthPercent = (project.delta * 100) / maxDelta; // use relative scale
  return (
    <div>
      <ProjectSummary
        widthPercent={widthPercent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        project={project}
        index={index}
      />
      <ProjectDetails isOpen={isOpen} project={project} year={year} />
    </div>
  );
};
