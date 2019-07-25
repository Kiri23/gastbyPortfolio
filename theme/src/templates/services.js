import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const ServicesTemplate = ({ data: { services } }) => {
  return (
    <Layout>
      <h1>Services</h1>
      <section>
        {services.nodes.map(({ id, title, slug, excerpt }) => (
          <article key={id}>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link to={slug}>Read more</Link>
          </article>
        ))}
      </section>
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
      }
    }
  }
`
