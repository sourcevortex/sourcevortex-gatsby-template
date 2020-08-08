import React from 'react'
import { Link } from 'gatsby'

// Components
import DefaultLayout from '@Layout/DefaultLayout'
import SEO from '@Component/Seo'

const Docs: React.FC = () => (
  <DefaultLayout>
    <SEO title="Projects Page" />
    <h1>Docs: Em desenvolvimento</h1>
    <Link to="/">Voltar para página principal</Link>
  </DefaultLayout>
)

export default Docs
