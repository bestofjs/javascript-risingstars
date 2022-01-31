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
  columns?: number;
  size?: number;
};
export const ProjectAvatarGrid = ({
  projects,
  columns = 14,
  size = 75,
}: Props) => {
  const niceProjects = projects.filter(
    (project) => !excluded.includes(project.slug)
  );
  // .slice(0, 50)
  return (
    <div className={styles.grid}>
      {niceProjects.map((project, i) => {
        const rowNumber = Math.floor(i / (columns / 2));
        const evenRow = rowNumber % 2 === 0;
        if (evenRow) {
          return [
            <Cell key={i} size={size} />,
            <Cell key={project.slug} project={project} size={size} />,
          ];
        } else {
          return [
            <Cell key={project.slug} project={project} size={size} />,
            <Cell key={i} size={size} />,
          ];
        }
      })}
    </div>
  );
};

const Cell = ({
  project,
  size,
}: {
  project?: RisingStars.Project;
  size: number;
}) => {
  if (!project)
    return <div style={{ width: size }} className={styles.emptyCell} />;
  return (
    <div style={{ width: size }} key={project.slug}>
      <ProjectAvatar project={project} size={size} />
    </div>
  );
};
