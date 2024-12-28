import { getEntry } from "astro:content";
import { flatten } from "flat";
import { createInstance } from "i18next";
import invariant from "tiny-invariant";

export async function useTranslations(language: string, year: number) {
  const messages = await loadAllMessages(language, year);

  const options = {
    lng: language,
    debug: false,
    resources: {
      [language]: { translation: messages },
    },
  };
  // @ts-expect-error TODsO
  const instance = createInstance(options);

  // @ts-expect-error TODO
  await instance.init(options);

  return {
    t: instance.t,
    i18n: instance,
  };
}

async function loadAllMessages(language: string, year: number) {
  const specificMessages = await getEntry("messages", year + "/" + language);
  invariant(
    specificMessages,
    `No messages found for year ${year} and language ${language}`,
  );
  const commonMessages = await getEntry("messages", "common/" + language);
  invariant(
    commonMessages,
    `No common messages found for language ${language}`,
  );

  const messages = flatten({
    common: commonMessages.data,
    ...specificMessages.data,
  });

  return messages;
}
