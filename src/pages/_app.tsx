// import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

// import theme from "../theme";
import "../css/app.css";
import "../css/dropdown.css";
import "../css/footer.css";
import "../css/picture.css";
import "../css/social.css";
import "../css/header.css";
import "../css/newsletter.css";
import "../css/project-category.css";
import "../css/project-details.css";
import "../css/toc.css";
import "../css/top.css";
import "../css/translator-section.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  // return (
  //   <ChakraProvider theme={theme}>
  //     <Component {...pageProps} />
  //   </ChakraProvider>
  // );
}

export default MyApp;
