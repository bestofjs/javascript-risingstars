import { useTranslation } from "~/i18n";
import styles from "./banner.module.css";

type Props = {
  year: number;
  language: string;
};
export async function Banner({ year, language }: Props) {
  const { t } = await useTranslation(language, year);
  
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url("/img/${year}/banner.png")` }}
    >
      <div className="container">
        <h1>{t("header.title")}</h1>
      </div>
    </div>
  );
}
