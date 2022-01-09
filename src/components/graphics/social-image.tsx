import { ProjectAvatarGrid } from "./project-avatar-grid";

type Props = {
  projects: RisingStars.Project[];
  year: number;
  language: string;
};
export const SocialImage = ({ projects, year, language }: Props) => {
  return (
    <div
      style={{
        width: 1280,
        height: 640,
        background: "linear-gradient(135deg,#ed8518,#e75f16,#b94100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 1000,
          height: 500,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ProjectAvatarGrid projects={projects} columns={10} size={100} />
      </div>
      <div
        style={{
          color: "white",
          fontSize: 120,
          position: "absolute",
          textAlign: "center",
          textShadow: "0 6px 6px rgba(143,50,0,.99)",
          fontWeight: "bold",
        }}
      >
        <Message year={year} language={language} />
      </div>
    </div>
  );
};

const Message = ({ year, language }: Pick<Props, "year" | "language">) => {
  const titles = {
    en: (
      <>
        {year} JavaScript
        <br />
        Rising Stars
      </>
    ),
    ja: (
      <span>
        JavaScript
        <br />
        <span style={{ fontSize: 80 }}>ライジングスター{year}</span>
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
  return titles[language] || titles["en"];
};

//   const niceProjects = projects
//     .filter((project) => !excluded.includes(project.slug))
//     .slice(0, 25);
//   return (
//     <div className={styles.wall}>
//       <div className={styles.text}>{title}</div>
//       <div className={styles.icon}>
//         {niceProjects.map((project) => (
//           <div key={project.slug}>
//             <ProjectAvatar project={project} size={75} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
