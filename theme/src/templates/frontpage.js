import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const FrontpageTemplate = ({ data: { frontpageYaml } }) => {
  const { title, subtitle, image, imageAltText } = frontpageYaml

  return (
    <Layout>
      <Hero
        title={title}
        subtitle={subtitle}
        image={{ ...image, imageAltText }}
      />
    </Layout>
  )
}

export default FrontpageTemplate

export const query = graphql`
  query {
    frontpageYaml {
      title
      subtitle
      image {
        ...ImageFragment
      }
      imageAltText
    }
  }
`
