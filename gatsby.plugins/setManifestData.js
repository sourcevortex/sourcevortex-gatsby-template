/**
 * Add manifest data to your site
 */
module.exports = function () {
  return {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: process.env.SITE_NAME,
      short_name: process.env.SITE_SHORT_NAME,
      start_url: process.env.SITE_START_URL,
      background_color: process.env.SITE_BACKGROUND_COLOR,
      theme_color: process.env.SITE_THEME_COLOR,
      display: process.env.SITE_DISPLAY,
      icon: process.env.SITE_ICON,
    },
  }
}