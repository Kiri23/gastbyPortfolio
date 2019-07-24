import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const Reference = ({
  pathContext: { previous, next },
  data: { reference },
}) => {
  const { name, publishedDate, body } = reference
  return (
    <Layout>
      <article>
        <h1>{name}</h1>
        <p>Published: {publishedDate}</p>
        <MDXRenderer>{body}</MDXRenderer>
        {previous && (
          <span>
            Previous post: <Link to={previous.slug}>{previous.name}</Link>
          </span>
        )}
        {next && (
          <span>
            Next post: <Link to={next.slug}>{next.name}</Link>
          </span>
        )}
      </article>
    </Layout>
  )
}

export default Reference

export const query = graphql`
  query($id: String!) {
    reference(id: { eq: $id }) {
      id
      name
      publishedDate(formatString: "MMMM DD, YYYY")
      body
    }
  }
`
