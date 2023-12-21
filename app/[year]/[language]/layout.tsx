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
  const { language } = params;

  return (
    <html lang={language}>
      <head />
      <body className={fontMono.variable + " " + fontSerif.variable}>
        {children}
      </body>
    </html>
  );
}

export async function generateMetadata({ params }) {
  const { language, year } = params;
  const { t } = await useTranslation(language, year);

  const title = t("page.title");
  const description = t("page.description");
  const metaData: Metadata = {
    title,
    description,
  };
  return metaData;
}

// TODO implement the other metadata fields

// Format for Next.js app router:

// export const metadata: Metadata = {
//   title: {
//     default: APP_DISPLAY_NAME,
//     template: `${APP_DISPLAY_NAME} • %s`,
//   },
//   description: APP_DESCRIPTION,
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   metadataBase: getMetadataRootURL(),
//   openGraph: {
//     url: APP_CANONICAL_URL,
//     title: APP_DISPLAY_NAME,
//     description: APP_DESCRIPTION,
//   },
// };

// Data to migrate, from the previous Head component:

// export default async function Head({ params }: Props) {
//   const { language, year } = params;
//   const { t } = await useTranslation(language, year);

//   const title = t("page.title");
//   const description = t("page.description");

//   const rootURL = process.env.NEXT_PUBLIC_ROOT_URL || ""; // env. variable setup from Vercel dashboard
//   const pageURL = `${rootURL}/${year}/${language}`;
//   const imageURL = `${rootURL}/img/${year}/${language}/rising-stars.png`; // Twitter needs an absolute URL?

//   return (
//     <>
//       <title>{title}</title>
//       <meta content="width=device-width, initial-scale=1" name="viewport" />
//       <link rel="icon" href="/favicon.ico" />
//       <meta property="og:title" content={title} />
//       <meta name="twitter:title" content={title} />
//       <meta name="description" content={description} />
//       <meta property="og:description" content={description} />
//       <meta property="og:type" content="article" />
//       <meta property="og:url" content={pageURL} />
//       <meta property="og:image" content={imageURL} />
//       <meta name="twitter:image:src" content={imageURL} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <link
//         precedence="default"
//         href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i|Roboto+Slab:300,400,700"
//         rel="stylesheet"
//       />
//       <script
//         data-goatcounter="https://risingstars.goatcounter.com/count"
//         async
//         src="//gc.zgo.at/count.js"
//       ></script>
//     </>
//   );
// }
