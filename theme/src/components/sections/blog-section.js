/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Section from "../section"
import BlogLink from "../blog-link"

const BlogSection = ({ posts }) => {
  return (
    <Section>
      <Styled.h2>Latest from the blog</Styled.h2>
      <div>
        {posts.map(post => (
          <BlogLink key={post.id} {...post} />
          // <article key={post.id} sx={{ my: 3 }}>
          //   <Styled.h3>{post.title}</Styled.h3>
          //   <Styled.p>{post.excerpt}</Styled.p>
          //   <Styled.p sx={{ fontSize: 0, color: "muted" }}>
          //     Published {post.date}
          //   </Styled.p>
          // </article>
        ))}
      </div>
    </Section>
  )
}

export default BlogSection
