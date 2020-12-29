import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const { year, language } = ctx.query;
    return { ...initialProps, year, language };
  }

  render() {
    const { year, language } = this.props as any;

    return (
      <Html lang={language}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i|Roboto+Slab:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <body className={`year${year}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
