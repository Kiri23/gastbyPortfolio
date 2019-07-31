/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Section from "../section"
import BlogLink from "../blog-link"
import Link from "../button-link"

const BlogSection = ({ posts, basePath }) => {
  return (
    <Section>
      <Styled.h2>Latest from the blog</Styled.h2>
      <div sx={{ my: 3 }}>
        {posts.map(post => (
          <BlogLink key={post.id} {...post} />
        ))}
      </div>
      <Link to={basePath}>Read all</Link>
    </Section>
  )
}

export default BlogSection
