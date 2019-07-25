/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const ServiceTemplate = ({
  pathContext: { previous, next },
  data: { service },
}) => {
  const { title, body, illustration } = service

  return (
    <Layout>
      {illustration.childImageSharp ? (
        <Image
          fluid={illustration.childImageSharp.fluid}
          alt={title}
          sx={{ width: "60%" }}
        />
      ) : (
        <img src={illustration.publicURL} alt={title} sx={{ width: "60%" }} />
      )}
      <Styled.h1>{title}</Styled.h1>
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
      illustration {
        publicURL
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
