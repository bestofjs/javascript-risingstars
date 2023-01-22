"use client";

import { useState } from "react";

function Accordion({ sections, serverSlot }) {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)} style={{ cursor: "pointer" }}>
            <h2>{section.title}</h2>
          </div>
          {expanded === index && <p>{section.content}</p>}
        </div>
      ))}
      {serverSlot}
    </div>
  );
}

export default Accordion;
