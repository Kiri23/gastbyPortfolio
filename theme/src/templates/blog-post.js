/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"

const BlogPostTemplate = ({
  pathContext: { previous, next },
  data: { post },
}) => {
  const { title, date, body, cover } = post

  return (
    <Layout sx={{ mb: 4 }}>
      <article sx={{ mb: 4 }}>
        {cover && (
          <Image
            image={cover}
            sx={{
              width: "100vw",
              maxHeight: "35vh",
              position: "relative",
              marginLeft: "-50vw",
              left: "50%",
            }}
          />
        )}
        <Styled.p sx={{ color: "muted" }}>Published on {date}</Styled.p>
        <Styled.h1>{title}</Styled.h1>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <S.LinkContainer sx={{ fontSize: 3 }}>
        {previous && (
          <S.LinkContent sx={{ gridArea: "newer" }}>
            <Styled.p>Newer post:</Styled.p>
            <Link to={previous.slug}>{previous.title}</Link>
          </S.LinkContent>
        )}
        {next && (
          <S.LinkContent sx={{ gridArea: "older" }}>
            <Styled.p>Older post:</Styled.p>
            <Link to={next.slug}>{next.title}</Link>
          </S.LinkContent>
        )}
      </S.LinkContainer>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    post: blogPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      body
      cover {
        ...ImageFragment
      }
    }
  }
`

const S = {}

S.LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "older newer";
  grid-gap: ${({ theme }) => theme.space[3]}px;
`

S.LinkContent = styled.div``
