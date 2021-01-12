import React, { useState } from "react";

import ProjectTableRow from "./ProjectTableRow";
import ProjectDetails from "./ProjectDetails";

const ProjectContainer = ({ maxDelta, ...props }) => {
  // only first project of "all" category should start expanded
  const defaultIsOpen = props.tagKey === "all" && props.index === 1;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const { project, index } = props;
  const widthPercent = (project.delta * 100) / maxDelta; // use relative scale
  return (
    <div>
      <ProjectTableRow
        widthPercent={widthPercent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        {...props}
      />
      <ProjectDetails
        key={`details-${index}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        {...props}
      />
    </div>
  );
};

export default ProjectContainer;
