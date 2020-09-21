// Settings
const config = require('./gatsby.settings/config')

// Plugins
const addSourceWordpress = require('./gatsby.plugins/addSourceWordpress')
const setCanonicalUrl = require('./gatsby.plugins/setCanonicalUrl')
const setManifestData = require('./gatsby.plugins/setManifestData')
const addSourceFilesystem = require('./gatsby.plugins/addSourceFilesystem')
const addGA = require('./gatsby.plugins/addGA')

const plugins = [
  addSourceWordpress(),
  setCanonicalUrl(),
  setManifestData(),
  addSourceFilesystem('images', `${__dirname}/static/images`),
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  // `gatsby-plugin-offline`,
];

const GA = addGA()
if (GA) {
  plugins.push(GA)
}

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins
}
