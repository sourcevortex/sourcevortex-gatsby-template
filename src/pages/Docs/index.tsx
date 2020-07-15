import React from 'react'
import { Link } from 'gatsby'

import { DefaultLayout } from '../../components/DefaultLayout'
import { SEO } from '../../components/Seo'

const Docs: React.FC = () => (
  <DefaultLayout>
    <SEO title="Docs Page" />
    <h1>Docs: Under development</h1>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default Docs
