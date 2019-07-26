/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Section from "../section"

const BlogSection = ({ posts }) => {
  return (
    <Section>
      <Styled.h2>Latest from the blog</Styled.h2>
      <div>
        {posts.map(post => (
          <article key={post.id} sx={{ my: 3 }}>
            <Styled.h3>{post.title}</Styled.h3>
            <Styled.p>{post.excerpt}</Styled.p>
            <Styled.p sx={{ fontSize: 0, color: "muted" }}>
              Published {post.date}
            </Styled.p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default BlogSection

export const fragment = graphql`
  fragment BlogSectionFields on BlogPost {
    id
    slug
    date(fromNow: true)
    title
    excerpt
    cover {
      ...ImageFragment
    }
  }
`
