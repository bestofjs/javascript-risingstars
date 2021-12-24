import { ProjectAvatar } from "components/project-avatar";
import styles from "./social-image.module.css";

const excluded = [
  "axios",
  "animatecss",
  "react-boilerplate",
  "angularjs",
  "airbnb-style-guide",
  "awesome",
  "standard",
  "skeleton",
  "webtorrent",
  "handlebarsjs",
];

export const SocialImage = ({ projects, lang = "ja", year }) => {
  const titles = {
    en: `${year} JavaScript Rising Stars`,
    ja: (
      <span>
        JavaScript
        <br /> ベスト・オブ・ザ・イヤー{year}
      </span>
    ),
    fr: `Le Meilleur du JavaScript en ${year}`,
    zh: (
      <span>
        {year}年<br />
        JavaScript
        <br />
        明星项目
      </span>
    ),
    es: (
      <span>
        Lo mejor
        <br />
        de JavaScript
        <br />
        en {year}
      </span>
    ),
  };
  const title = titles[lang] || titles["en"];
  const niceProjects = projects
    .filter((project) => !excluded.includes(project.slug))
    .slice(0, 25);
  return (
    <div className={styles.wall}>
      <div className={styles.text}>{title}</div>
      <div className={styles.icon}>
        {niceProjects.map((project) => (
          <div key={project.slug}>
            <ProjectAvatar project={project} size={75} />
          </div>
        ))}
      </div>
    </div>
  );
};
