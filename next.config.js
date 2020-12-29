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
};
