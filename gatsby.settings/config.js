require('dotenv').config();

module.exports = {
  siteUrl: process.env.SITE_URL,
  siteMetadata: {
    title: process.env.SITE_NAME,
    description: process.env.SITE_DESCRIPTION,
    author: process.env.SITE_AUTHOR,
    image: process.env.SITE_IMAGE,
    imageAlt: process.env.SITE_IMAGE_ALT,
    siteUrl: process.env.SITE_URL,
  },
  homepage: process.env.SITE_HOMEPAGE,
  pagesEnabled: {
    about: process.env.SITE_ABOUT_PAGE_ENABLED,
    blog: process.env.SITE_BLOG_PAGE_ENABLED,
    portfolio: process.env.SITE_PORTFOLIO_PAGE_ENABLED,
  },
}
