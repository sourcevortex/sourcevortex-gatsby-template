/**
 * 
 * @param {string} url GraphQL Wordpress URL, ex: http://wp-site.com/graphql
 */
module.exports = function (url) {
  return {
    resolve: `gatsby-source-wordpress-experimental`,
    options: {
      url:
        process.env.WPGRAPHQL_URL ||
        url,
      verbose: true,
      develop: {
        hardCacheMediaFiles: true,
      },
      debug: {
        graphql: {
          writeQueriesToDisk: true,
        },
      },
      type: {
        Post: {
          limit:
            process.env.NODE_ENV === `development`
              ?
              50
              :
              5000,
        },
      },
    },
  }
}