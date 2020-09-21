module.exports = function () {
  return {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: process.env.SITE_URL,
      stripQueryString: true,
    },
  }
}