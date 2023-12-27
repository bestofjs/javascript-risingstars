import { Metadata } from "next";

import { MainPageProps } from "~/fetch-page-props";
import { fontMono, fontSerif } from "~/fonts";
import { useTranslation } from "~/i18n";

export default function PageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: MainPageProps;
}) {
  const { language, year } = params;

  return (
    <html lang={language}>
      <head />
      <body
        className={["year" + year, fontMono.variable, fontSerif.variable].join(
          " "
        )}
      >
        {children}
        <script
          data-goatcounter="https://risingstars.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }) {
  const { language, year } = params;
  const { t } = await useTranslation(language, year);

  const title = t("page.title");
  const description = t("page.description");
  const rootURL = process.env.NEXT_PUBLIC_ROOT_URL || ""; // env. variable setup from Vercel dashboard
  const pageURL = `${rootURL}/${year}/${language}`;
  const imageURL = `${rootURL}/img/${year}/${language}/rising-stars.png`; // Twitter needs an absolute URL?

  const metaData: Metadata = {
    title,
    description,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageURL,
      publishedTime: `${year}-01-02T00:00:00Z`,
      images: [
        {
          url: imageURL,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageURL],
    },
  };
  return metaData;
}
