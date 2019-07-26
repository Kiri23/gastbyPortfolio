/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"

const PortfolioItemTemplate = ({
  pathContext: { previous, next },
  data: { item },
}) => {
  const { title, publishedDate, body, screenshot } = item
  return (
    <Layout>
      <article>
        <Styled.h1>{title}</Styled.h1>
        <Styled.p>Published: {publishedDate}</Styled.p>
        {screenshot && <Image image={screenshot} alt={title} />}
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
