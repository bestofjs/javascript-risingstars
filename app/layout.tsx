import "../src/css/app.css";
import "../src/css/dropdown.css";
import "../src/css/header.css";
import "../src/css/newsletter.css";
import "../src/css/project-category.css";
import "../src/css/project-details.css";
import "../src/css/toc.css";
import "../src/css/top.css";
import "../src/css/translator-section.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
