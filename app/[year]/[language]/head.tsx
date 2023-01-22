// @ts-nocheck
import { MainPageProps } from "~/fetch-page-props";
import { useTranslation } from "~/i18n";

// TODO The `<link>` to include Google Fonts only works with the `precedence="default"` attribute
// that triggers an error with TypeScript!

type Props = {
  params: MainPageProps;
};
export default async function Head({ params }: Props) {
  const { language, year } = params;
  const { t } = await useTranslation(language, year);

  const title = t("page.title");
  const description = t("page.description");

  const rootURL = process.env.NEXT_PUBLIC_ROOT_URL || ""; // env. variable setup from Vercel dashboard
  const pageURL = `${rootURL}/${year}/${language}`;
  const imageURL = `${rootURL}/img/${year}/${language}/rising-stars.png`; // Twitter needs an absolute URL?

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content={imageURL} />
      <meta name="twitter:image:src" content={imageURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        precedence="default"
        href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i|Roboto+Slab:300,400,700"
        rel="stylesheet"
      />
      <script
        data-goatcounter="https://risingstars.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </>
  );
}
