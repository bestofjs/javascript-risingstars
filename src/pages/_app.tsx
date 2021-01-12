import { AppProps } from "next/app";

// TODO move to CSS Modules natively supported by Next.js?
import "../css/app.css";
import "../css/dropdown.css";
import "../css/picture.css";
import "../css/header.css";
import "../css/newsletter.css";
import "../css/project-category.css";
import "../css/project-details.css";
import "../css/toc.css";
import "../css/top.css";
import "../css/translator-section.css";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO wrap the app with a theme provider when needed
  return <Component {...pageProps} />;
}

export default MyApp;
