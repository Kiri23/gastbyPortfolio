/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Section from "../section"
import Link from "../button-link"

const PortfolioSection = ({ items, basePath }) => {
  return (
    <Section>
      <Styled.h2>Portfolio</Styled.h2>
      <div sx={{ my: 3 }}>
        {items.map(item => (
          <article key={item.id} sx={{ my: 3 }}>
            <Styled.h3>{item.title}</Styled.h3>
            <Styled.p>{item.excerpt}</Styled.p>
            <Styled.p sx={{ fontSize: 0, color: "muted" }}>
              Published {item.publishedDate}
            </Styled.p>
          </article>
        ))}
      </div>
      <Link to={basePath}>See all</Link>
    </Section>
  )
}

export default PortfolioSection

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
