import { MainPageProps } from "~/fetch-page-props";

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
      <body>{children}</body>
    </html>
  );
}
