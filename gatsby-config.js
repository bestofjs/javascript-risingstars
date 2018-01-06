// Important Note:  we don't use `gatsby-transformer-remark` plugin because
// markdown content is process by `react-markdown` in order to process project 'slugs'
module.exports = {
  siteMetadata: {
    title: `JavaScript Rising Stars`
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
    }
  ],
  pathPrefix: `/javascript-risingstars`
}
