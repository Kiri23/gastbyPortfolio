import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPostsTemplate = ({ data: { posts } }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <section>
        {posts.nodes.map(({ id, title, date, excerpt, slug }) => (
          <article key={id}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{excerpt}</p>
            <Link to={slug}>Read</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default BlogPostsTemplate

export const query = graphql`
  query {
    posts: allBlogPost(sort: { fields: [date, title], order: DESC }) {
      nodes {
        id
        slug
        title
        date(formatString: "DD MMM, YYYY")
        excerpt(pruneLength: 140)
      }
    }
  }
`
