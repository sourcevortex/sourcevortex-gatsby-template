import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { DefaultLayout } from '../components/DefaultLayout'
import { SEO } from '../components/Seo'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <DefaultLayout>
    <SEO title="Using TypeScript" />
    <h1>About: Under development</h1>
  </DefaultLayout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
