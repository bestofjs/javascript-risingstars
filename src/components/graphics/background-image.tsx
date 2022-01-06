import { ProjectAvatarGrid } from "./project-avatar-grid";

export const BackgroundImage = ({ projects }) => {
  const size = 75;
  const columns = 16;
  const rows = 4;
  const width = columns * size;
  const height = rows * size;
  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgba(230, 80, 0, 0.9)",
      }}
    >
      <ProjectAvatarGrid projects={projects} columns={columns} size={size} />;
    </div>
  );
};
