/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const ReferencesTemplate = ({ data: { references } }) => {
  return (
    <Layout>
      <Styled.h1>References</Styled.h1>
      <section>
        {references.nodes.map(({ id, slug, name, excerpt }) => (
          <article key={id}>
            <Styled.h2>{name}</Styled.h2>
            <Styled.p>{excerpt}</Styled.p>
            <Link to={slug}>Read more</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default ReferencesTemplate

export const query = graphql`
  query {
    references: allReference(
      sort: { fields: [publishedDate, name], order: DESC }
    ) {
      nodes {
        id
        slug
        name
        excerpt
      }
    }
  }
`
