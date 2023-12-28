import { MainPageProps, fetchPageProps } from "~/fetch-page-props";
import { Category } from "./category";

type Props = Pick<MainPageProps, "allYears" | "language" | "tags" | "year"> & {
  category: RisingStars.Category;
  content: React.ReactNode;
  guestContent: React.ReactNode;
};

export async function CategoryLoader(props: Props) {
  const { category, year, language } = props;
  const { projects } = await fetchCategoryContent(year, language, category.key);
  return <Category projects={projects} {...props} />;
}

export async function fetchCategoryContent(
  year: number,
  language: string,
  category: string
) {
  const data = await fetchPageProps(year, language);
  const projects = data.projectsByTag[category] as RisingStars.Project[];

  return {
    projects,
  };
}
