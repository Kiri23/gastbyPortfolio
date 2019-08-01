/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/button-link"

const PortfolioItemTemplate = ({
  pageContext: { basePaths },
  data: { item },
}) => {
  const { title, slug, publishedDate, excerpt, body, screenshot } = item
  return (
    <Layout sx={{ my: 4 }}>
      <SEO postMeta={{ title: title, description: excerpt, slug }} />
      <article>
        <Styled.h1>{title}</Styled.h1>
        <Styled.p>Published: {publishedDate}</Styled.p>
        {screenshot && <Image image={screenshot} alt={title} />}
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <Link to={basePaths.portfolioBasePath} sx={{ mt: 4 }}>
        See all work
      </Link>
    </Layout>
  )
}

export default PortfolioItemTemplate

export const query = graphql`
  query($id: String!) {
    item: portfolioItem(id: { eq: $id }) {
      id
      title
      slug
      publishedDate(formatString: "DD MMM, YYYY")
      excerpt
      body
      screenshot {
        ...ImageFragment
      }
    }
  }
`
