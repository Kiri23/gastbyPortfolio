/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Image from "../image"

const Hero = ({ title, subtitle, image }) => {
  return (
    <div>
      <Image image={image} alt={image.imageAltText} />
      <Styled.h1>{title}</Styled.h1>
      <Styled.h2>{subtitle}</Styled.h2>
    </div>
  )
}

export default Hero
