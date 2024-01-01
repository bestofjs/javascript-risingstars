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
    const { language, year } = this.props as any;

    return (
      <Html lang={language}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preload" as="image" href={`/img/${year}/banner.png`} />
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i|Roboto+Slab:300,400,700"
            rel="stylesheet"
          />
          <script
            data-goatcounter="https://risingstars.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        </Head>
        <body className={`year${year}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
