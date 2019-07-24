import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const PortfolioItemTemplate = ({
  pathContext: { previous, next },
  data: { item },
}) => {
  const { title, publishedDate, body } = item
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>Published: {publishedDate}</p>
        <MDXRenderer>{body}</MDXRenderer>
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
    }
  }
`
