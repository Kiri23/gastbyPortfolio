import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const ReferencesTemplate = ({ data: { references } }) => {
  return (
    <Layout>
      <h1>References</h1>
      <section>
        {references.nodes.map(({ id, slug, name, excerpt }) => (
          <article key={id}>
            <h2>{name}</h2>
            <p>{excerpt}</p>
            <Link to={slug}>Read more</Link>
          </article>
        ))}
      </section>
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
      }
    }
  }
`
