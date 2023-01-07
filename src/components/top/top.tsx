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
  const hasPreviousYear = activeYear !== allYears[0];
  const hasNextYear = activeYear !== allYears[allYears.length - 1];

  return (
    <div className="year-menu-container">
      <div className="container small-container">
        <div className="year-menu">
          {hasPreviousYear && (
            <YearLink year={activeYear - 1} className="mobile-link">
              &larr;&nbsp;
              {activeYear - 1}
            </YearLink>
          )}
          {allYears.map((year) =>
            activeYear === year ? (
              <div key={year} className="active">
                {year}
              </div>
            ) : (
              <YearLink key={year} year={year} className="desktop-link">
                {abbreviateYear(year)}
              </YearLink>
            )
          )}
          {hasNextYear && (
            <YearLink year={activeYear + 1} className="mobile-link">
              {activeYear + 1}
              &nbsp;&rarr;
            </YearLink>
          )}
        </div>
      </div>
    </div>
  );
};

const YearLink = ({
  year,
  children,
  className,
}: {
  year: number;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={{
        pathname: "/[year]/[language]",
        query: { year, language: "en" },
      }}
      className={className}
    >
      {children}
    </Link>
  );
};

function abbreviateYear(year: number) {
  return "’" + year.toString().slice(2);
}
