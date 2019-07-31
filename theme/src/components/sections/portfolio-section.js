/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Section from "../section"
import PortfolioLink from "../portfolio-link"
import Link from "../button-link"

const PortfolioSection = ({ items, basePath }) => {
  return (
    <Section>
      <Styled.h2>Portfolio</Styled.h2>
      <S.Container sx={{ my: 3 }}>
        {items.map(item => (
          <PortfolioLink key={item.id} {...item} />
        ))}
      </S.Container>
      <Link to={basePath}>See all</Link>
    </Section>
  )
}

export default PortfolioSection

const S = {}

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
