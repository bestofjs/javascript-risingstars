/** @type {import('next').NextConfig} */
const settings = require("./app/settings/years-setup.json");

module.exports = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "bestofjs.org",
      },
    ],
  },
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
