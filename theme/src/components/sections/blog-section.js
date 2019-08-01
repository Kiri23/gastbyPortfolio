/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Section from "../section"
import BlogLink from "../blog-link"
import Link from "../button-link"

const BlogSection = ({ title, posts, basePath }) => {
  return (
    <Section>
      {title && <Styled.h2>{title}</Styled.h2>}
      <S.Container sx={{ my: 3 }}>
        {posts.map(post => (
          <BlogLink key={post.id} {...post} />
        ))}
      </S.Container>
      {basePath && <Link to={basePath}>Read all</Link>}
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
