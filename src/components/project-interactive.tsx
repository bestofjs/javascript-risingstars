import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    window.htmx.process(element!);
  }, [isOpen]);

  return (
    <div ref={ref} className={isOpen ? "project-is-open" : "project-is-closed"}>
      <div onClick={() => setIsOpen((current) => !current)}>{summary}</div>
      {isOpen && <>{details}</>}
    </div>
  );
}
