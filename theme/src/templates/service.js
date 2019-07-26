/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"

const ServiceTemplate = ({
  pathContext: { previous, next },
  data: { service },
}) => {
  const { title, body, illustration } = service

  return (
    <Layout>
      {illustration && <Image image={illustration} alt={title} />}
      <Styled.h1>{title}</Styled.h1>
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
        ...ImageFragment
      }
    }
  }
`
