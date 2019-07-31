/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Portfolio from "../components/sections/portfolio-section"

const PortfolioTemplate = ({ data: { items } }) => {
  return (
    <Layout>
      <Styled.h1>Portfolio</Styled.h1>
      <Portfolio items={items.nodes} />
    </Layout>
  )
}

export default PortfolioTemplate

export const query = graphql`
  query {
    items: allPortfolioItem(
      sort: { fields: [publishedDate, title], order: DESC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        screenshot {
          ...ImageFragment
        }
      }
    }
  }
`
