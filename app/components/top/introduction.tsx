import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "~/i18n";
import { TranslatedBlock } from "~/translated-block";

export async function Introduction({ language, year }) {
  const { t } = await useTranslation(language, year);
  return (
    <div>
      <div className="introduction-text">
        {/* @ts-expect-error Server Component */}
        <TranslatedBlock id="introduction" language={language} year={year} />
      </div>
      <hr />
      <p style={{ margin: "1rem 0 0" }}>
        <Trans
          i18nKey="introduction.explanation"
          t={t}
          defaults="We analyzed projects coming from <appLink>Best of JS</appLink>, a curated list of the best projects related to the web platform."
          components={{appLink: <a href="https://bestofjs.org">Best of JS!</a>}}
        />
      </p>
    </div>
  );
}
