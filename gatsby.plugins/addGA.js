/**
 * Add Google Analytics to your site
 */
module.exports = function () {
  if (process.env.APP_ENV === 'production') {
    if (process.env.GOOGLE_ANALYTICS_ID) {
      const analytics = {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID,
          head: false
        }
      }
      return analytics
    }
  }
  return false;
}