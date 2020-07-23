import React from 'react'
import { Link } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

// Configs
import { getPage, PagesSummaryEnum as Pg } from '@Config/pagesSummary'

const Blog: React.FC = () => (
  <DefaultLayout page={getPage(Pg.BLOG_PAGE)}>
    <SEO title="Blog page" />
    <h1>BLOG: Under development</h1>
    <p>This page will be list all posts created inside "_posts" dir</p>
    <Link to="/blog/2020/07/post-example/">Go to post example</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default Blog
