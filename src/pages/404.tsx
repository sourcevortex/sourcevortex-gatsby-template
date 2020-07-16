import React from 'react'
import { Link } from 'gatsby'

import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

const NotFoundPage: React.FC = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default NotFoundPage
