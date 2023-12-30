import fs from "fs-extra";
import flattenJSON from "flat";
import { createInstance } from "i18next";
import path from "path";
import { initReactI18next } from "react-i18next/initReactI18next";
import { projectRoot } from "~/fetch-page-props";

// const initI18next = async (lng, year) => {
//   const i18nInstance = createInstance();
//   await i18nInstance
//     .use(initReactI18next)
//     .use(
//       resourcesToBackend(async (language) => {
//         console.log("Import", language, year);
//         let json = await import(`./${year}/${language}.json`);
//         console.log(json);

//         return json;
//       })
//     )
//     .init(getOptions(lng, year));
//   // .init();
//   console.log("Init OK!");

//   return i18nInstance;
// };

// export async function useTranslation0(lng: string, year: number, options = {}) {
//   const i18nextInstance = await initI18next(lng, year.toString());
//   return {
//     t: i18nextInstance.getFixedT(
//       lng,
//       year.toString(),
//       (options as any).keyPrefix
//     ),
//     i18n: i18nextInstance,
//   };
// }

export async function useTranslation(language: string, year: number) {
  const messages = await loadAllMessages(language, year);

  const options = {
    lng: language,
    debug: false,
    resources: {
      [language]: { translation: messages },
    },
  };
  const instance = createInstance(options);
  instance.use(initReactI18next);

  await instance.init(options);

  return {
    // t: instance.getFixedT(null),
    t: instance.t,
    i18n: instance,
  };
}

async function loadAllMessages(language: string, year: number) {
  const root = path.join(projectRoot, "public", "i18n", "messages");

  const specificMessages = await fs.readJSON(
    path.join(root, year.toString(), `${language}.json`)
  );

  const commonMessages = await fs.readJSON(
    path.join(root, "common", `${language}.json`)
  );

  const messages = flattenJSON({
    common: commonMessages,
    ...specificMessages,
  });

  return messages;
}
