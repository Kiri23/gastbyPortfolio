/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

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
        <Image
          fluid={screenshot.childImageSharp.fluid}
          sx={{ width: "100%" }}
        />
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
        childImageSharp {
          fluid(maxHeight: 400, maxWidth: 720, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
