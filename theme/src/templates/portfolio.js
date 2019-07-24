import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const PortfolioTemplate = ({ data: { items } }) => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <section>
        {items.nodes.map(({ id, slug, title }) => (
          <article key={id}>
            <h2>{title}</h2>
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
      }
    }
  }
`
