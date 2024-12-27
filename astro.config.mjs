import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel";
import { globbySync } from "globby";

import settings from "./src/settings/years-setup.json";

const includeFiles = globbySync([
  `./data/**/*.json`,
  `./i18n/**/*.json`,
  `./i18n/**/*.md`,
]);

const currentYear = settings.find(({ current }) => !!current).year;

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": `/${currentYear}/en`,
  },
  integrations: [preact()],
  output: "static",
  adapter: vercel({ includeFiles }),
});
