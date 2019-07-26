import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Blog from "../components/sections/blog-section"
import Portfolio from "../components/sections/portfolio-section"
import References from "../components/sections/reference-section"
import Services from "../components/sections/service-section"

const FrontpageTemplate = ({ data }) => {
  const { hero, posts, portfolio, references, services } = data

  return (
    <Layout>
      <Hero {...hero} />
      <Blog posts={posts.nodes} />
      <Portfolio items={portfolio.nodes} />
      <References references={references.nodes} />
      <Services services={services.nodes} />
    </Layout>
  )
}

export default FrontpageTemplate

export const query = graphql`
  query {
    hero: heroYaml {
      ...HeroFields
    }
    posts: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 3) {
      nodes {
        ...BlogSectionFields
      }
    }
    portfolio: allPortfolioItem(
      sort: { fields: [publishedDate, title], order: DESC }
      limit: 3
    ) {
      nodes {
        ...PortfolioSectionFields
      }
    }
    references: allReference(
      sort: { fields: [publishedDate, name], order: DESC }
      limit: 3
    ) {
      nodes {
        ...ReferenceSectionFields
      }
    }
    services: allService {
      nodes {
        ...ServiceSectionFields
      }
    }
  }
`
