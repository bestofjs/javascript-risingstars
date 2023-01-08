import { ProjectAvatar } from "components/project-avatar";
import { formatStarNumber } from "./project-shared";

type Props = {
  project: RisingStars.Project;
  index: number;
  widthPercent: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export const ProjectSummary = ({
  project,
  index,
  isOpen,
  setIsOpen,
  widthPercent,
}: Props) => {
  return (
    <div
      className={`project-table-row ${isOpen ? "is-open" : "is-closed"}`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="ranking">{index}</div>
      <div className="inner">
        <div className="icon">
          <ProjectAvatar project={project} size={50} />
        </div>
        <div className="main-column">
          <div
            className="project-table-bar"
            style={{ width: `${widthPercent}%` }}
          />
          <h3 className="project-name">{project.name}</h3>
          <div className="description">{project.description}</div>
        </div>
        <div className="stars">+{formatStarNumber(project.delta, 1)}☆</div>
      </div>
    </div>
  );
};
