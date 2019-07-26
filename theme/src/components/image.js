/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ image, alt = "" }) => {
  return image.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} alt={alt} />
  ) : (
    <Styled.img src={image.publicURL} alt={alt} />
  )
}

export default Image

export const fragment = graphql`
  fragment ImageFragment on File {
    id
    publicURL
    childImageSharp {
      fluid(maxWidth: 650) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
