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
      resolve: `gatsby-plugin-netlify`
    }
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: []
    //   }
    // }
  ]
}
