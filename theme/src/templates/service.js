/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/button-link"

const ServiceTemplate = ({ pathContext: { basePaths }, data: { service } }) => {
  const { title, body, illustration } = service

  return (
    <Layout sx={{ my: 4 }}>
      {illustration && <Image image={illustration} alt={title} />}
      <Styled.h1>{title}</Styled.h1>
      <MDXRenderer>{body}</MDXRenderer>
      <Link to={basePaths.servicesBasePath} sx={{ mt: 4 }}>
        See all services
      </Link>
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
