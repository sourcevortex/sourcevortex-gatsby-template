import React from 'react'
import { Link } from 'gatsby'

// Components
import DefaultLayout from '@Component/DefaultLayout'
import SEO from '@Component/Seo'

// Config
import { getPage, PagesSummaryEnum as Pg } from '@Root/config/pagesSummary'

const Docs: React.FC = () => (
  <DefaultLayout page={getPage(Pg.DOCS_PAGE)}>
    <SEO title="Docs Page" />
    <h1>Docs: Em desenvolvimento</h1>
    <Link to="/">Voltar para página principal</Link>
  </DefaultLayout>
)

export default Docs
