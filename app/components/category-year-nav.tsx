"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  category: RisingStars.Category;
  label: string;
  year: number;
  allYears: number[];
};

export function CategoryYearNav({ category, label, year, allYears }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasPreviousYear = allYears.includes(year - 1);
  const hasNextYear = allYears.includes(year + 1);

  const goToYear = (direction: 1 | -1) => {
    const previousYear = year + direction;
    const yearSearchParams = new URLSearchParams(searchParams.toString());
    yearSearchParams.set(category.key, previousYear.toString());
    router.replace(`${pathname}?${yearSearchParams.toString()}`, {
      scroll: false,
    });
  };

  const goToPreviousYear = () => goToYear(-1);
  const goToNextYear = () => goToYear(1);

  return (
    <h2
      className="project-category-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <div>
        {hasPreviousYear && (
          <button className="button" type="button" onClick={goToPreviousYear}>
            &lt; {year - 1}
          </button>
        )}
      </div>
      <div className="project-category-header-inner">{label}</div>
      <div>
        {hasNextYear && (
          <button className="button" type="button" onClick={goToNextYear}>
            {year + 1} &gt;
          </button>
        )}
      </div>
    </h2>
  );
}
