import React from "react";
import Link from "next/link";

const YearNavigator = ({ allYears, year: activeYear }) => {
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

export default YearNavigator;
