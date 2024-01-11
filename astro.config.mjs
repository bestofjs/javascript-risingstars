import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
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
  integrations: [react()],
  output: "hybrid",
  adapter: vercel({ includeFiles }),
});
