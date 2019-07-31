/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Blog from "../components/sections/blog-section"
import Portfolio from "../components/sections/portfolio-section"
import References from "../components/sections/reference-section"
import Services from "../components/sections/service-section"

const FrontpageTemplate = ({ data, pageContext }) => {
  const { hero, posts, portfolio, references, services } = data
  const {
    basePaths: { blogBasePath, portfolioBasePath, referencesBasePath },
  } = pageContext

  return (
    <Layout>
      <Hero {...hero} />
      <Services services={services.nodes} />
      <Blog
        title="Latest from the blog"
        posts={posts.nodes}
        basePath={blogBasePath}
      />
      <Portfolio
        title="Some of my work"
        items={portfolio.nodes}
        basePath={portfolioBasePath}
      />
      <References
        title="References"
        references={references.nodes}
        basePath={referencesBasePath}
      />
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
