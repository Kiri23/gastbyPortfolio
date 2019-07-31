/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Section from "../section"
import Reference from "../reference-link"

const ReferenceSection = ({ references, basePath }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
  }

  return (
    <Section>
      <Styled.h2>References</Styled.h2>
      <Slider {...settings} sx={{ my: 3 }}>
        {references.map(ref => (
          <Reference key={ref.id} {...ref} />
        ))}
      </Slider>
      {/* <Link to={basePath}>See all</Link> */}
    </Section>
  )
}

export default ReferenceSection
