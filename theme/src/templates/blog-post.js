import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const BlogPostTemplate = ({
  pathContext: { previous, next },
  data: { post },
}) => {
  return (
    <Layout>
      <article>
        <h1>{post.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        {previous && <Link to={previous.node.slug}>{previous.node.title}</Link>}
        {next && <Link to={next.node.slug}>{next.node.title}</Link>}
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    post: blogPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      body
    }
  }
`
