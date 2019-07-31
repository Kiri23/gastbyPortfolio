/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Blog from "../components/sections/blog-section"

const BlogPostsTemplate = ({ data: { posts } }) => {
  return (
    <Layout>
      <Styled.h1>Blog</Styled.h1>
      <Blog posts={posts.nodes} />
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
        cover {
          ...ImageFragment
        }
      }
    }
  }
`
