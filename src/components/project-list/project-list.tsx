import { useState } from "react";

import { ProjectSummary } from "./project-summary";
import { ProjectDetails } from "./project-details";

type Props = {
  count: number;
  isFirstItemOpenByDefault: boolean;
  limit: number;
  projects: RisingStars.Project[];
  tags: RisingStars.Tag[];
  year: number;
};

export const ProjectList = ({
  count,
  limit = 5,
  projects,
  isFirstItemOpenByDefault,
  tags,
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
            project={project}
            tags={tags}
            defaultIsOpen={i === 0 && isFirstItemOpenByDefault}
            maxDelta={maxDelta}
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

type ListItemProps = {
  index: number;
  defaultIsOpen: boolean;
  maxDelta: number;
  project: RisingStars.Project;
} & Pick<Props, "tags" | "year">;

const ProjectListItem = ({
  index,
  defaultIsOpen,
  maxDelta,
  project,
  tags,
  year,
}: ListItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const widthPercent = Math.ceil((project.delta * 100) / maxDelta); // use relative scale
  return (
    <div>
      <ProjectSummary
        index={index}
        isOpen={isOpen}
        project={project}
        setIsOpen={setIsOpen}
        widthPercent={widthPercent}
      />
      {isOpen && <ProjectDetails project={project} tags={tags} year={year} />}
    </div>
  );
};
