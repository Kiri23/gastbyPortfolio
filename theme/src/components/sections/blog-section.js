/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Section from "../section"
import BlogLink from "../blog-link"
import Link from "../button-link"

const BlogSection = ({ posts, basePath }) => {
  return (
    <Section>
      <Styled.h2>Latest from the blog</Styled.h2>
      <S.Container sx={{ my: 3 }}>
        {posts.map(post => (
          <BlogLink key={post.id} {...post} />
        ))}
      </S.Container>
      <Link to={basePath}>Read all</Link>
    </Section>
  )
}

export default BlogSection

const S = {}

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
