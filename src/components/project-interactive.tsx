import { h } from "preact";
import { useState } from "preact/hooks";

export type Props = {
  defaultIsOpen: boolean;
  summary: h.JSX.Element;
  details: h.JSX.Element;
};

export default function ProjectInteractive({
  defaultIsOpen,
  details,
  summary,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  return (
    <div className={isOpen ? "project-is-open" : "project-is-closed"}>
      <div
        className="project-table-row"
        onClick={() => setIsOpen((current) => !current)}
      >
        {summary}
      </div>
      {isOpen && <>{details}</>}
    </div>
  );
}
