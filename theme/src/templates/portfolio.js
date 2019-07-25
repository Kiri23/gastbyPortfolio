/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const PortfolioTemplate = ({ data: { items } }) => {
  return (
    <Layout>
      <Styled.h1>Portfolio</Styled.h1>
      <section>
        {items.nodes.map(({ id, slug, title, excerpt, screenshot }) => (
          <article key={id}>
            <Image
              fluid={screenshot.childImageSharp.fluid}
              sx={{ width: "100%" }}
            />
            <Styled.h2>{title}</Styled.h2>
            <Styled.p>{excerpt}</Styled.p>
            <Link to={slug}>Read more</Link>
          </article>
        ))}
      </section>
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
          childImageSharp {
            fluid(maxHeight: 400, maxWidth: 720, cropFocus: NORTH) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
