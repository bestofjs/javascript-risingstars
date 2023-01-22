import Link from "next/link";

import { MainPageProps } from "~/fetch-page-props";
import { Banner } from "./banner";
import { Introduction } from "./introduction";

type Props = Pick<MainPageProps, "allYears" | "year" | "language">;
export async function Top({ allYears, language, year }: Props) {
  return (
    <>
      <YearNavigator allYears={allYears} year={year} language={language} />
      {/* @ts-expect-error Server Component */}
      <Banner year={year} language={language} />
      <div className="container small-container">
        <div className="top-with-banner-introduction">
          {/* @ts-expect-error Server Component */}
          <Introduction year={year} language={language} />
        </div>
      </div>
    </>
  );
}

const YearNavigator = ({ allYears, year: activeYear }: Props) => {
  return (
    <div className="year-menu-container">
      <div className="container small-container">
        <div className="year-menu">
          {allYears.map((year) => (
            <YearLink key={year} year={year} isActive={activeYear === year} />
          ))}
        </div>
      </div>
    </div>
  );
};

const YearLink = ({ year, isActive }) => {
  return isActive ? (
    <div className="active">{year}</div>
  ) : (
    <Link href={`/${year}/en`}>{abbreviateYear(year)}</Link>
  );
};

function abbreviateYear(year: number) {
  return "’" + year.toString().slice(2);
}
