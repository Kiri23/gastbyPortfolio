/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPostsTemplate = ({ data: { posts } }) => {
  return (
    <Layout>
      <Styled.h1>Blog</Styled.h1>
      <section>
        {posts.nodes.map(({ id, title, date, excerpt, slug }) => (
          <article key={id}>
            <Styled.h2>{title}</Styled.h2>
            <Styled.p>{date}</Styled.p>
            <Styled.p>{excerpt}</Styled.p>
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
