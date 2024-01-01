import { HTMLAttributes } from "react";

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
  // Performance optimization:
  // to avoid fetching 2 times the same avatar in 2 different sizes, we fetch only once the biggest one
  const maxSize = Math.max(size, 50);
  const urls = {
    standard: getProjectAvatarUrl(project, maxSize),
    retina: getProjectAvatarUrl(project, maxSize * 2),
  };

  const sharedAttributes = {
    src: urls.standard,
    width: size,
    height: size,
    alt: project.name,
    loading: "lazy",
  } as HTMLAttributes<HTMLImageElement>;

  return project.icon ? (
    <img {...sharedAttributes} />
  ) : (
    <img {...sharedAttributes} srcSet={`${urls.retina} 2x`} />
  );
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
