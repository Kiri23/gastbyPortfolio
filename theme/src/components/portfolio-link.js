/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "./image"
import ButtonLink from "./button-link"

const Service = ({ title, slug, screenshot, excerpt }) => {
  return (
    <S.Article sx={{ my: 3, px: 3, flexBasis: ["100%", "100%", "50%", "50%"] }}>
      <Image image={screenshot} alt={title} />
      <Styled.h3>{title}</Styled.h3>
      <Styled.p>{excerpt}</Styled.p>
      <ButtonLink to={slug}>Read more</ButtonLink>
    </S.Article>
  )
}

export default Service

export const fragment = graphql`
  fragment PortfolioSectionFields on PortfolioItem {
    id
    slug
    title
    publishedDate(fromNow: true)
    excerpt
    screenshot {
      ...ImageFragment
    }
  }
`

const S = {}

S.Article = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  box-sizing: border-box;
`
