import { LanguageMenuFullSize } from "./language-menu-fullsize";
import { LanguageMenuCompact } from "./language-menu-compact";
import { BestOfJSLogo } from "components/svg-logos";

type Props = {
  language: string;
  year: number;
  availableLanguages: RisingStars.Language[];
};
export const Header = ({ language, year, availableLanguages }: Props) => {
  return (
    <div id="header">
      <div className="container">
        <div className="header-layout">
          <a id="logo" href="https://bestofjs.org" aria-label="Best of JS">
            <BestOfJSLogo width={130} height={37.15} />
          </a>
          <div className="language-column">
            <LanguageMenuFullSize
              currentLanguage={language}
              languages={availableLanguages}
              year={year}
            />
            {availableLanguages.length > 1 && (
              <LanguageMenuCompact
                currentLanguage={language}
                languages={availableLanguages}
                year={year}
              />
            )}
          </div>
        </div>
      </div>
      <a
        href="https://github.com/bestofjs/javascript-risingstars"
        id="github-corner"
        aria-label="GitHub repo"
      >
        <img src="/octocat.svg" width={60} height={60} alt="GitHub" />
      </a>
    </div>
  );
};
