import React from "react";
import Link from "next/link";

const YearNavigator = ({ allYears, year: activeYear }) => {
  return (
    <div className="year-menu-container">
      <div className="container small-container">
        <div className="year-menu">
          {allYears.map((year) => (
            <YearNavigator.Item
              key={year}
              year={year}
              isActive={activeYear === year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

YearNavigator.Item = ({ year, isActive }) => {
  const url = `/${year}`;
  return isActive ? (
    <div className="active">{year}</div>
  ) : (
    <a href={url}>
      <span>{year}</span>
    </a>
  );
};

export default YearNavigator;
