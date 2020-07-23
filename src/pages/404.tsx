import React from 'react'
import { Link } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

// Configs
import { getPage, PagesSummaryEnum as Pg } from '@Config/pagesSummary'

const NotFoundPage: React.FC = () => {
  return (
    <DefaultLayout page={getPage(Pg.NOT_FOUND)}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </DefaultLayout>
  )
}

export default NotFoundPage
