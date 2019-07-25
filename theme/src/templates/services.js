/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const ServicesTemplate = ({ data: { services } }) => {
  return (
    <Layout>
      <Styled.h1>Services</Styled.h1>
      <section>
        {services.nodes.map(({ id, title, slug, excerpt, illustration }) => (
          <article key={id}>
            {illustration.childImageSharp ? (
              <Image
                fluid={illustration.childImageSharp.fluid}
                alt={title}
                sx={{ width: "60%" }}
              />
            ) : (
              <img
                src={illustration.publicURL}
                alt={title}
                sx={{ width: "60%" }}
              />
            )}
            <Styled.h2>{title}</Styled.h2>
            <Styled.p>{excerpt}</Styled.p>
            <Link to={slug}>Read more</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default ServicesTemplate

export const query = graphql`
  query {
    services: allService {
      nodes {
        id
        title
        slug
        excerpt
        illustration {
          publicURL
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
