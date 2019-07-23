import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allSitePage {
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
      {data.allSitePage.nodes.map(page => {
        if (page.context.showInNavigation) {
          return (
            <Link to={page.path} key={page.id}>
              {page.context.heading}
            </Link>
          )
        } else return null
      })}
    </nav>
  )
}

export default Navigation
