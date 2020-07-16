import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <DefaultLayout>
    <SEO title="Home/About page" />
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
