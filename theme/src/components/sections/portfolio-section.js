/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Section from "../section"
import PortfolioLink from "../portfolio-link"
import Link from "../button-link"

const PortfolioSection = ({ title, items, basePath }) => {
  return (
    <Section>
      {title && <Styled.h2>{title}</Styled.h2>}
      <S.Container>
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
