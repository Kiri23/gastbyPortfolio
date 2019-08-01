/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Services from "../components/sections/service-section"

const ServicesTemplate = ({ data: { services } }) => {
  return (
    <Layout>
      <SEO postMeta={{ title: "Services" }} />
      <Styled.h1>Services</Styled.h1>
      <Services services={services.nodes} />
    </Layout>
  )
}

export default ServicesTemplate

export const query = graphql`
  query {
    services: allService {
      nodes {
        id
        title
        slug
        excerpt
        illustration {
          ...ImageFragment
        }
      }
    }
  }
`
