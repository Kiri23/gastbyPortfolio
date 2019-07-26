/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"

const Reference = ({
  pathContext: { previous, next },
  data: { reference },
}) => {
  const { name, publishedDate, body, image } = reference
  return (
    <Layout>
      <article>
        {image && <Image image={image} alt={name} />}
        <Styled.h1>{name}</Styled.h1>
        <Styled.p>Published: {publishedDate}</Styled.p>
        <MDXRenderer>{body}</MDXRenderer>
        {previous && (
          <span>
            Newer: <Link to={previous.slug}>{previous.name}</Link>
          </span>
        )}
        {next && (
          <span>
            Older: <Link to={next.slug}>{next.name}</Link>
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
      image {
        ...ImageFragment
      }
    }
  }
`
