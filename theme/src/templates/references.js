/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import References from "../components/sections/reference-section"

const ReferencesTemplate = ({ data: { references } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "References" }} />
      <Styled.h1>References</Styled.h1>
      <References references={references.nodes} />
    </Layout>
  )
}

export default ReferencesTemplate

export const query = graphql`
  query {
    references: allReference(
      sort: { fields: [publishedDate, name], order: DESC }
    ) {
      nodes {
        id
        slug
        name
        excerpt
        image {
          ...ImageFragment
        }
      }
    }
  }
`
