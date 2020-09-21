// Settings
const config = require('./gatsby.settings/config')

// Plugins
const addSourceWordpress = require('./gatsby.plugins/addSourceWordpress')
const setCanonicalUrl = require('./gatsby.plugins/setCanonicalUrl')
const setManifestData = require('./gatsby.plugins/setManifestData')
const addGA = require('./gatsby.plugins/addGA')

const plugins = [
  addSourceWordpress(),
  setCanonicalUrl(),
  setManifestData(),
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
