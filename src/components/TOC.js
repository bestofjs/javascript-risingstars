import React from 'react';
import { FormattedMessage } from 'react-intl';

const TOC = ({ entities, url, intl, translations, categories }) => (
  <div className="toc nav">
  <ol>
    {categories.map((item, i) => {
      const key = item.tag.replace(/-/gi, '');
      return (
        <li key={item.tag}>
          <a className="nav-link" href={`#${item.tag}`}>
            <FormattedMessage id={`categories.${key}`} />
          </a>
        </li>
      );
    })}
  </ol>
  </div>
);

export default TOC;
