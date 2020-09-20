require('dotenv').config();
const config = require('./gatsby.settings/config')

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/static/images`,
    },
  },
  {
    resolve: `gatsby-source-wordpress-experimental`,
    options: {
      url:
        process.env.WPGRAPHQL_URL ||
        `http://sourcevortex.admin.dev.com/graphql`,
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
              ? // Lets just pull 50 posts in development to make it easy on ourselves.
              50
              : // and we don't actually need more than 5000 in production for this particular site
              5000,
        },
      },
    },
  },
  // {
  //   resolve: `gatsby-transformer-remark`,
  //   options: {
  //     plugins: [
  //       {
  //         resolve: 'gatsby-remark-code-titles',
  //         options: {
  //           className: 'md-code-title',
  //         },
  //       },
  //       {
  //         resolve: `gatsby-remark-autolink-headers`,
  //         options: {},
  //       },
  //       {
  //         resolve: `gatsby-remark-prismjs`,
  //         options: {},
  //       },
  //     ],
  //   },
  // },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: config.siteUrl,
      stripQueryString: true,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `static/images/site-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  `gatsby-plugin-styled-components`,
];

if (process.env.APP_ENV === 'production') {
  if (process.env.GOOGLE_ANALYTICS_ID) {
    const analytics = {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: false
      }
    }
    plugins.push(analytics)
  }
}

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins
}
