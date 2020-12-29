import React, { useState } from "react";

import ProjectContainer from "./ProjectContainer";

const ProjectTable = ({ projects, limit = 5, count, ...props }) => {
  const [showFullList, toggleFullList] = useState(false);
  const maxDelta = projects
    .map((p) => p.delta)
    .reduce((a, b) => Math.max(a, b), []);
  const visibleProjects = showFullList ? projects : projects.slice(0, limit);
  const hasMoreItems = count > limit;
  return (
    <div>
      <div className="project-table">
        {visibleProjects.map((project, i) => (
          <ProjectContainer
            key={project.slug}
            maxDelta={maxDelta}
            project={project}
            index={i + 1}
            {...props}
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

export default ProjectTable;
