/*
Important Note:  we don't use `gatsby-transformer-remark` plugin because
markdown content is process by `react-markdown` in order to process project 'slugs'
*/
module.exports = {
  siteMetadata: {
    title: `JavaScript Rising Stars`,
    url: 'https://risingstars.js.org',
    GA: 'UA-44563970-4'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/i18n`
      }
    },
    {
      resolve: 'gatsby-plugin-sass'
    },
    {
      resolve: `gatsby-plugin-netlify`
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    }
  ]
  // `no prefix needed when using the subdomain `.js.org`
  // pathPrefix: `/javascript-risingstars` // needed when deployed on https://bestofjs.github.io/javascript-risingstars/
}
