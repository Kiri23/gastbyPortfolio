/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"
import Link from "../components/button-link"

const PortfolioItemTemplate = ({
  pageContext: { basePaths },
  data: { item },
}) => {
  const { title, publishedDate, body, screenshot } = item
  return (
    <Layout sx={{ my: 4 }}>
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
      publishedDate(formatString: "DD MMM, YYYY")
      body
      screenshot {
        ...ImageFragment
      }
    }
  }
`
