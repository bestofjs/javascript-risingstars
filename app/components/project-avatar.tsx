import Image from "next/image";

/*
Render the image to be displayed inside the project card
Can be either :
* the GitHub owner avatar (by default if no `icon` property is specified)
* A custom SVG file if project's `icon`property is specified.
*/
type Props = {
  project: RisingStars.Project;
  size?: number;
};
export const ProjectAvatar = ({ project, size = 100 }: Props) => {
  const url = getProjectAvatarUrl(project, size);
  return <Image src={url} width={size} height={size} alt={project.name} />;
};

const isUrl = (input) => input.startsWith("http");

const formatIconUrl = (input) =>
  isUrl(input) ? input : `https://bestofjs.org/logos/${input}`;

const formatOwnerAvatar = (owner_id, size) =>
  `https://avatars.githubusercontent.com/u/${owner_id}?v=3&s=${size}`;

const getProjectAvatarUrl = (project, size) =>
  project.icon
    ? formatIconUrl(project.icon)
    : formatOwnerAvatar(project.owner_id, size);
