import { ProjectSummary } from "./project-summary";
import { ProjectDetails } from "./project-details";
import { ProjectSingleItem } from "./project-single-item.client";

type Props = {
  isFirstItemOpenByDefault: boolean;
  language: string;
  projects: RisingStars.Project[];
  tags: RisingStars.Tag[];
  year: number;
  offset?: number;
};

export function ProjectList({
  projects,
  offset = 0,
  language,
  year,
  tags,
  isFirstItemOpenByDefault,
}: Props) {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectListItem
          key={project.slug}
          project={project}
          index={offset + index + 1}
          language={language}
          year={year}
          tags={tags}
          defaultIsOpen={isFirstItemOpenByDefault && index === 0}
        />
      ))}
    </>
  );
}

type ListItemProps = {
  index: number;
  defaultIsOpen?: boolean;
  maxDelta?: number;
  project: RisingStars.Project;
} & Pick<Props, "language" | "tags" | "year">;

const ProjectListItem = ({
  index,
  defaultIsOpen,
  maxDelta,
  project,
  tags,
  language,
  year,
}: ListItemProps) => {
  const widthPercent = Math.ceil((project.delta * 100) / maxDelta); // use relative scale

  return (
    <ProjectSingleItem
      defaultIsOpen={defaultIsOpen}
      renderProjectSummary={
        <ProjectSummary
          index={index}
          project={project}
          widthPercent={widthPercent}
        />
      }
      renderProjectDetails={
        <ProjectDetails
          project={project}
          tags={tags}
          language={language}
          year={year}
        />
      }
    />
  );
};
