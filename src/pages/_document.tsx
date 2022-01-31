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
    const { language } = this.props as any;

    return (
      <Html lang={language}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
