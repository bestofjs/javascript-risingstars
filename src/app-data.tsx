import { createContainer } from "unstated-next";

export type AppData = {
  allYears: number[];
  projectsByTag: RisingStars.ProjectsByCategory;
  tags: RisingStars.Tag[];
  translations: RisingStars.IntlContent;
  year: number;
};

function useAppContext(initialState: AppData) {
  return initialState;
}

export const AppDataContainer = createContainer(useAppContext);

export const useAppData = AppDataContainer.useContainer;
