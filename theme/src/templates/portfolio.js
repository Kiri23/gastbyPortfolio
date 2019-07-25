/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const PortfolioTemplate = ({ data: { items } }) => {
  return (
    <Layout>
      <Styled.h1>Portfolio</Styled.h1>
      <section>
        {items.nodes.map(({ id, slug, title, excerpt }) => (
          <article key={id}>
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
      }
    }
  }
`
