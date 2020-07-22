import React from 'react'
import { Link } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

// Config
import { PagesSummaryEnum } from '@Root/config/pagesSummary'

const Docs: React.FC = () => (
  <DefaultLayout page={PagesSummaryEnum.DOCS_PAGE}>
    <SEO title="Docs Page" />
    <h1>Docs: Under development</h1>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default Docs
