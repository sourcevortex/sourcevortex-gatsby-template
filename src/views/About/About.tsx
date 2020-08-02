import React from 'react'
import { Link } from 'gatsby'

// Components
import DefaultLayout from '@Layouts/DefaultLayout'
import SEO from '@Component/Seo'

const About: React.FC = () => {
  return (
    <DefaultLayout>
      <SEO title="Sobre" />
      <h1>Sobre</h1>
      <p>Em desenvolvimento</p>
      <Link to="/">Voltar para página principal</Link>
    </DefaultLayout>
  )
}

export default About
