/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const ReferencesTemplate = ({ data: { references } }) => {
  return (
    <Layout>
      <Styled.h1>References</Styled.h1>
      <section>
        {references.nodes.map(({ id, slug, name, excerpt, image }) => (
          <article key={id}>
            <Image
              fluid={image.childImageSharp.fluid}
              alt={name}
              sx={{ maxWidth: "128px" }}
            />
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
        image {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
