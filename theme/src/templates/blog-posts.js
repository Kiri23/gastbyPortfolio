import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const BlogPostsTemplate = ({ pageContext: { posts } }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <section>
        {posts.map(({ node: post }) => (
          <Link to={post.slug}>
            <p>{post.title}</p>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default BlogPostsTemplate
