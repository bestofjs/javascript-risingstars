import { useTranslation } from "~/i18n";
import { TranslatedBlock } from "~/translated-block";

type Props = {
  language: string;
  year: number;
};
export async function Conclusion({ language, year }: Props) {
  const { t } = await useTranslation(language, year);

  return (
    <div className="container small-container" id="conclusion">
      <div className="small-card conclusion">
        <div className="small-card-header">
          <h2 className="tag-card-header-text">{t("conclusion")}</h2>
        </div>
        <div className="markdown-body">
          {/* @ts-expect-error Server Component */}
          <TranslatedBlock id="conclusion" year={year} language={language} />
        </div>
      </div>
    </div>
  );
}

export default Conclusion;
