/*
Component only used to generate the header background image
saved in `/public/img/:year/banner.png`
*/
import { ProjectAvatar } from "components/project-avatar";
import styles from "./project-avatar-grid.module.css";

const excluded = [
  "axios",
  "animatecss",
  "react-boilerplate",
  "airbnb-style-guide",
  "front-end-checklist",
  "freecodecamp",
  "awesome",
  "json-server",
  "threejs",
  "express",
  "reveal",
  "immutable",
  "material-design-icons",
  "30-seconds-of-code",
];

type Props = {
  projects: RisingStars.Project[];
};
export const ProjectAvatarGrid = ({ projects }: Props) => {
  const niceProjects = projects.filter(
    (project) => !excluded.includes(project.slug)
  );
  // .slice(0, 50)
  return (
    <div className={styles.bgPicture}>
      <div className={styles.grid}>
        {niceProjects.map((project, i) => {
          const rowNumber = Math.floor(i / 7);
          const evenRow = rowNumber % 2 === 0;
          if (evenRow) {
            return [<Cell project={project} />, <Cell />];
          } else {
            return [<Cell />, <Cell project={project} />];
          }
        })}
      </div>
    </div>
  );
};

const Cell = ({ project }: { project?: RisingStars.Project }) => {
  if (!project) return <div className={styles.emptyCell} />;
  return (
    <div>
      <ProjectAvatar project={project} size={75} />
    </div>
  );
};
