"use client";

import { useState } from "react";

type Props = {
  defaultIsOpen?: boolean;
  maxDelta?: number;
  renderProjectSummary: React.ReactNode;
  renderProjectDetails: React.ReactNode;
};
export function ProjectSingleItem({
  defaultIsOpen,
  renderProjectSummary,
  renderProjectDetails,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  return (
    <div className={isOpen ? "project-is-open" : "project-is-closed"}>
      <div onClick={() => setIsOpen(!isOpen)}>{renderProjectSummary}</div>
      {isOpen && renderProjectDetails}
    </div>
  );
}
