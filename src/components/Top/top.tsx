import Link from "next/link";

import { useAppData } from "app-data";
import { Banner } from "./banner";
import { Introduction } from "./introduction";

export const Top = () => {
  return (
    <>
      <YearNavigator />
      <Banner />
      <div className="container small-container">
        <div className="top-with-banner-introduction">
          <Introduction />
        </div>
      </div>
    </>
  );
};

const YearNavigator = () => {
  const { allYears, year: activeYear } = useAppData();
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
        pathname: "/[year]/en",
        query: { year },
      }}
    >
      <a>{year}</a>
    </Link>
  );
};
