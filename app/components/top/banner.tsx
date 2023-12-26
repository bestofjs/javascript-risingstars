import { useTranslation } from "~/i18n";

type Props = {
  year: number;
  language: string;
};
export async function Banner({ year, language }: Props) {
  const { t } = await useTranslation(language, year);

  return (
    <div className="banner">
      <div className="container">
        <h1>{t("header.title")}</h1>
      </div>
    </div>
  );
}
