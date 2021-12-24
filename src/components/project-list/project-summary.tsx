import { ProjectAvatar } from "components/project-avatar";
import { Stars } from "./project-shared";

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
          <div className="description">
            <Description text={project.description} showEmojis={false} />
          </div>
        </div>
        <div className="stars">
          <Stars value={project.delta} decimals={1} />
        </div>
      </div>
    </div>
  );
};

// Component used to display repository `description`,
// removing emojis except if `showEmojis` option is set to true
// See node.js repository: `Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:`
const Description = ({ text, showEmojis }) => {
  const replacedBy = showEmojis ? emoji() : "";
  const result = text.replace(/(:([a-z_\d]+):)/g, replacedBy).trim();
  if (showEmojis) return <span dangerouslySetInnerHTML={{ __html: result }} />;
  return <span>{result}</span>;
};

const emoji = () => {
  const size = 20;
  return `<img align="absmiddle" width="${size}" height=${size} src="https://assets-cdn.github.com/images/icons/emoji/$2.png">`;
};
