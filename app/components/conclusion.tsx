import { useTranslation } from "~/i18n";

type Props = {
  language: string;
  year: number;
  content: React.ReactNode;
};
export async function Conclusion({ language, year, content }: Props) {
  const { t } = await useTranslation(language, year);

  return (
    <div className="container small-container" id="conclusion">
      <div className="small-card conclusion">
        <div className="small-card-header">
          <h2 className="tag-card-header-text">{t("conclusion")}</h2>
        </div>
        <div className="markdown-body">{content}</div>
      </div>
    </div>
  );
}
