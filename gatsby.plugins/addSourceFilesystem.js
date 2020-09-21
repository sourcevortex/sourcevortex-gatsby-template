/**
 * Add new source filesystem to plugins
 * 
 * @param {string} name 
 * @param {string} path 
 */
module.exports = function (name, path) {
  return {
    resolve: `gatsby-source-filesystem`,
    options: {
      name,
      path,
    },
  }
}