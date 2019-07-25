/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const Reference = ({
  pathContext: { previous, next },
  data: { reference },
}) => {
  const { name, publishedDate, body, image } = reference
  return (
    <Layout>
      <article>
        <Image
          fluid={image.childImageSharp.fluid}
          alt={name}
          sx={{ maxWidth: "128px" }}
        />
        <Styled.h1>{name}</Styled.h1>
        <Styled.p>Published: {publishedDate}</Styled.p>
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
      image {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
