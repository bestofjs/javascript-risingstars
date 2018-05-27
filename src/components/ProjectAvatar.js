import React from 'react'

/*
Return the image URL to be displayed inside the project card
Can be either :
* the GitHub owner avatar (by default if no `icon` property is specified)
* A custom SVG file if project's `icon`property is specified.
The SVG can be stored locally (inside `www/logos` folder) or in the cloud.
*/

const isUrl = input => input.startsWith('http')

const formatIconUrl = input =>
  isUrl(input) ? input : `https://bestofjs.org/logos/${input}`

const formatOwnerAvatar = (owner_id, size) =>
  `https://avatars.githubusercontent.com/u/${owner_id}?v=3&s=${size}`

const getProjectAvatarUrl = (project, size) =>
  project.icon
    ? formatIconUrl(project.icon)
    : formatOwnerAvatar(project.owner_id, size)

const Avatar = ({ project, size = 100, link = false }) => {
  const { svg } = project
  if (svg)
    return (
      <div style={{ width: size }} dangerouslySetInnerHTML={{ __html: svg }} />
    )
  // Performance optimization:
  // to avoid fetching 2 times the same avatar in 2 different sizes, we fetch only once the biggest one
  const maxSize = Math.max(size, 50)
  const urls = {
    standard: getProjectAvatarUrl(project, maxSize),
    retina: getProjectAvatarUrl(project, maxSize * 2)
  }

  const img = (
    <img
      src={urls.standard}
      srcSet={`${urls.retina} 2x`}
      width={size}
      height={size}
      alt={project.name}
    />
  )

  return link ? <a href={`#${project.slug}`}>{img}</a> : img
}

export default Avatar
