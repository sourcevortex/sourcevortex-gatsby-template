import React from 'react'
import { Link } from 'gatsby'

import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

const Docs: React.FC = () => (
  <DefaultLayout>
    <SEO title="Docs Page" />
    <h1>Docs: Under development</h1>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default Docs
