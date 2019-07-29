/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ image, alt = "", ...props }) => {
  return image.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} alt={alt} {...props} />
  ) : (
    <Styled.img src={image.publicURL} alt={alt} {...props} />
  )
}

export default Image

export const fragment = graphql`
  fragment ImageFragment on File {
    id
    publicURL
    childImageSharp {
      fluid(maxWidth: 950) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
