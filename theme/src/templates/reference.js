/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/button-link"

const Reference = ({ pathContext: { basePaths }, data: { reference } }) => {
  const { name, slug, publishedDate, excerpt, body, image } = reference
  return (
    <Layout>
      <SEO postMeta={{ title: name, description: excerpt, slug }} />
      <article>
        {image && <Image image={image} alt={name} />}
        <Styled.h1>{name}</Styled.h1>
        <Styled.p>Published: {publishedDate}</Styled.p>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <Link to={basePaths.referenceBasePath} sx={{ mt: 4 }}>
        See all work
      </Link>
    </Layout>
  )
}

export default Reference

export const query = graphql`
  query($id: String!) {
    reference(id: { eq: $id }) {
      id
      name
      slug
      publishedDate(formatString: "MMMM DD, YYYY")
      excerpt
      body
      image {
        ...ImageFragment
      }
    }
  }
`
