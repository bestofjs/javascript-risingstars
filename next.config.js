const settings = require("./data/settings.json");

module.exports = {
  async redirects() {
    const yearRedirects = settings.map(({ year }) => ({
      source: `/${year}`,
      destination: `/${year}/en`,
      permanent: true,
    }));

    const currentYear = settings.find(({ current }) => !!current).year;

    const rootRedirect = {
      source: "/",
      destination: `/${currentYear}/en`,
      permanent: true,
    };

    return [rootRedirect, ...yearRedirects];
  },
  // Hack to avoid errors like `Module not found: Can't resolve 'fs'`
  // when using helper functions that include backend code from pages
  // see https://github.com/vercel/next.js/issues/16153#issuecomment-976216790
  // and https://github.com/vercel/next.js/issues/27741#issuecomment-919827714
  webpack: (config, { webpack, isServer }) => {
    config.externals = config.externals.concat([
      "flat",
      "fs-extra",
      "jdown",
      "path",
    ]);
    return config;
  },
};
