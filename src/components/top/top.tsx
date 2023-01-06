import Link from "next/link";

import { AppData } from "app-data";
import { Banner } from "./banner";
import { Introduction } from "./introduction";

type Props = Pick<AppData, "allYears" | "year">;
export const Top = ({ allYears, year }: Props) => {
  return (
    <>
      <YearNavigator allYears={allYears} year={year} />
      <Banner />
      <div className="container small-container">
        <div className="top-with-banner-introduction">
          <Introduction />
        </div>
      </div>
    </>
  );
};

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
    <Link
      href={{
        pathname: "/[year]/[language]",
        query: { year, language: "en" },
      }}
    >
      {abbreviateYear(year)}
    </Link>
  );
};

function abbreviateYear(year: number) {
  return "’" + year.toString().slice(2);
}
