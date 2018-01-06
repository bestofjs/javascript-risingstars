import React from 'react';
import { FormattedMessage } from 'react-intl';
import ProjectAvatar from './ProjectAvatar';

const TOC = ({ entities, url, intl, translations, categories, projects }) => (
  <div className="toc nav container container-section small-container">

    <h2 className="toc-header">
      <FormattedMessage id="introduction.table_of_contents" />
    </h2>
    
    <ol>
      {categories.map((item, i) => {
        const key = item.tag.replace(/-/gi, '');
        return (
          <li key={item.tag}>
            <a className="toc-link" href={`#section-${item.tag}`}>
              <span>
                <FormattedMessage id={`categories.${key}`} />
              </span>
              <div className="toc-projects">
                {projects[item.tag].slice(0, Math.min(item.count, 10)).map(project => 
                  <ProjectAvatar project={project} size={30} link={false} />
                )}
              </div>
            </a>
          </li>
        );
      })}
      <li><a className="toc-link" href={`#conclusion`}>Conclusion</a></li>
    </ol>

  </div>
);

export default TOC;
