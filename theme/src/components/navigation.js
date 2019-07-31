import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allSitePage(filter: { context: { showInNavigation: { eq: true } } }) {
        nodes {
          id
          path
          context {
            heading
            showInNavigation
          }
        }
      }
    }
  `)

  return (
    <nav>
      {data.allSitePage.nodes.map(page => (
        <Link to={page.path} key={page.id}>
          {page.context.heading}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
