/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import Image from "./image"

const ReferenceLink = ({ name, excerpt, image }) => {
  return (
    <S.Article sx={{ my: 3 }}>
      <Styled.blockquote>{excerpt}</Styled.blockquote>
      <S.Image image={image} alt={name} />
      <Styled.h4>{name}</Styled.h4>
    </S.Article>
  )
}

export default ReferenceLink

export const fragment = graphql`
  fragment ReferenceSectionFields on Reference {
    id
    slug
    name
    publishedDate(fromNow: true)
    excerpt
    image {
      ...ImageFragment
    }
  }
`

const S = {}

S.Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Image = styled(Image)`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
`
