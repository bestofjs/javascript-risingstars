import React from "react";

import Description from "./Description";
import ProjectAvatar from "../ProjectAvatar";
import Stars from "../Stars";

const ProjectTableRow = ({
  project,
  showDescription = true,
  index,
  isOpen,
  setIsOpen,
  widthPercent,
}) => {
  return (
    <div
      className={`project-table-row ${isOpen ? "is-open" : "is-closed"}`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="ranking">
        <span>{index}</span>
      </div>
      <div className="inner">
        <div className="icon">
          <ProjectAvatar project={project} size={50} />
        </div>
        <div className="main-column">
          <div
            className="project-table-bar"
            style={{ width: `${widthPercent}%` }}
          />
          <h4 className="project-name">{project.name}</h4>
          {showDescription && (
            <div className="description">
              <Description text={project.description} showEmojis={false} />
            </div>
          )}
        </div>
        <div className="stars">
          <Stars value={project.delta} decimals={1} />
        </div>
      </div>
    </div>
  );
};

export default ProjectTableRow;
