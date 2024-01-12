import { useState, type ReactNode } from "react";

export type Props = {
  defaultIsOpen: boolean;
  summary: ReactNode;
  details: ReactNode;
};

export default function ProjectInteractive({
  defaultIsOpen,
  details,
  summary,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  return (
    <div className={isOpen ? "project-is-open" : "project-is-closed"}>
      <div onClick={() => setIsOpen((current) => !current)}>{summary}</div>
      {isOpen && <>{details}</>}
    </div>
  );
}
