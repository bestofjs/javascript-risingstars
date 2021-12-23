import { createContainer } from "unstated-next";

type AppData = {
  allYears: number[];
  year: number;
  entities: RisingStars.Entities;
  translations: RisingStars.IntlContent;
};

function useAppContext(initialState: AppData) {
  return initialState;
}

export const AppDataContainer = createContainer(useAppContext);

export const useAppData = AppDataContainer.useContainer;
