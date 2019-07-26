/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const {
    footerYaml: { social_media },
  } = useStaticQuery(graphql`
    query {
      footerYaml {
        social_media {
          name
          url
        }
      }
    }
  `)
  return (
    <div
      sx={{ p: 3, width: "100%", backgroundColor: "primary", color: "white" }}
    >
      <h1>Footer</h1>
      <div>
        {social_media.map(media => (
          <div>
            <a href={media.url} rel="noreferrer noopener">
              {media.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
