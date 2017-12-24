import React from 'react'
import ProjectAvatar from '../ProjectAvatar'
import './style.css'

const excluded = [
  'axios',
  'animatecss',
  'react-boilerplate',
  'angularjs',
  'airbnb-style-guide',
  'awesome',
  'create-react-app',
  'standard',
  'skeleton',
  'webtorrent',
  'handlebarsjs'
]

const Wall = ({ projects, lang = 'ja' }) => {
  const titles = {
    en: '2016 JavaScript Rising Stars',
    ja: (
      <span>
        JavaScript<br /> ベスト・オブ・ザ・イヤー2016
      </span>
    )
  }
  const niceProjects = projects
    .filter(project => !excluded.includes(project.slug))
    .slice(0, 25)
  return (
    <div id="wall">
      <div className="text">{titles[lang]}</div>
      <div className="icon-wall-grid">
        {niceProjects.map(project => (
          <div key={project.slug}>
            <ProjectAvatar project={project} size={75} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wall
