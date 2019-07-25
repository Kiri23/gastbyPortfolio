import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const ServiceTemplate = ({
  pathContext: { previous, next },
  data: { service },
}) => {
  const { title, body } = service

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      {previous && (
        <span>
          Previous: <Link to={previous.slug}>{previous.title}</Link>
        </span>
      )}
      {next && (
        <span>
          Next: <Link to={next.slug}>{next.title}</Link>
        </span>
      )}
    </Layout>
  )
}

export default ServiceTemplate

export const query = graphql`
  query($id: String!) {
    service(id: { eq: $id }) {
      title
      body
    }
  }
`
