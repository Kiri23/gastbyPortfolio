/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"

const BlogPostTemplate = ({
  pathContext: { previous, next },
  data: { post },
}) => {
  const { title, body, cover } = post

  return (
    <Layout>
      <article>
        <Styled.h1>{title}</Styled.h1>
        {cover && <Image image={cover} />}
        <MDXRenderer>{body}</MDXRenderer>
        {previous && (
          <span>
            Newer: <Link to={previous.slug}>{previous.title}</Link>
          </span>
        )}
        {next && (
          <span>
            Older: <Link to={next.slug}>{next.title}</Link>
          </span>
        )}
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
      cover {
        ...ImageFragment
      }
    }
  }
`
