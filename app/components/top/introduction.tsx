import { Trans } from "react-i18next/TransWithoutContext";

import { useTranslation } from "~/i18n";

type Props = {
  language: string;
  year: number;
  content: React.ReactNode;
};

export async function Introduction({ language, year, content }: Props) {
  const { t } = await useTranslation(language, year);
  return (
    <div>
      <div className="introduction-text">{content}</div>
      <hr />
      <p className="explanation">
        <Trans
          i18nKey="introduction.explanation"
          t={t}
          defaults="We analyzed projects coming from <appLink>Best of JS</appLink>, a curated list of the best projects related to the web platform."
          components={{
            appLink: <a href="https://bestofjs.org">Best of JS!</a>,
          }}
        />
      </p>
    </div>
  );
}
