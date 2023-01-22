import Accordion from "./accordion";
import { MyServerComponent } from "./server-component";

export default function TestPage() {
  const sections = [
    { title: "Section 1", content: "Content 1" },
    { title: "Section 2", content: "Content 2" },
  ];
  // @ts-expect-error Server Component
  return <Accordion sections={sections} serverSlot={<MyServerComponent />} />;
}
