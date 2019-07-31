/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Section from "../section"
import Link from "../button-link"

const ReferenceSection = ({ references, basePath }) => {
  return (
    <Section>
      <Styled.h2>References</Styled.h2>
      <div sx={{ my: 3 }}>
        {references.map(ref => (
          <article key={ref.id} sx={{ my: 3 }}>
            <Styled.h3>{ref.name}</Styled.h3>
            <Styled.p>{ref.excerpt}</Styled.p>
            <Styled.p sx={{ fontSize: 0, color: "muted" }}>
              Published {ref.publishedDate}
            </Styled.p>
          </article>
        ))}
      </div>
      <Link to={basePath}>See all</Link>
    </Section>
  )
}

export default ReferenceSection

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
