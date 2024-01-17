import fs from "fs-extra";
import { flatten } from "flat";
import { createInstance } from "i18next";
import path from "path";

export async function useTranslations(language: string, year: number) {
  const messages = await loadAllMessages(language, year);

  const options = {
    lng: language,
    debug: false,
    resources: {
      [language]: { translation: messages },
    },
  };
  const instance = createInstance(options);
  // instance.use(initReactI18next);

  await instance.init(options);

  return {
    t: instance.t,
    i18n: instance,
  };
}

async function loadAllMessages(language: string, year: number) {
  const root = path.join(process.cwd(), "i18n", "messages");

  const specificMessages = await fs.readJSON(
    path.join(root, year.toString(), `${language}.json`)
  );

  const commonMessages = await fs.readJSON(
    path.join(root, "common", `${language}.json`)
  );

  const messages = flatten({
    common: commonMessages,
    ...specificMessages,
  });

  return messages;
}
