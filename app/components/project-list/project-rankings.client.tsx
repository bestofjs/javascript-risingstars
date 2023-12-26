"use client";

import { useState } from "react";

type Props = {
  renderTopProjects: React.ReactNode;
  renderExtraProjects: React.ReactNode;
};
export function ProjectRankings({
  renderTopProjects,
  renderExtraProjects,
}: Props) {
  const [showFullList, toggleFullList] = useState(false);

  return (
    <>
      {renderTopProjects}
      {showFullList ? (
        renderExtraProjects
      ) : (
        <button
          className="button show-more-button"
          type="button"
          onClick={() => toggleFullList(true)}
        >
          SHOW MORE
        </button>
      )}
    </>
  );
}
