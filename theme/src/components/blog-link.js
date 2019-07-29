/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "./image"

const BlogLink = ({ title, slug, date, cover }) => {
  const [zoomed, setZoomed] = useState(false)

  return (
    <S.Link
      to={slug}
      sx={{ my: 3 }}
      onMouseEnter={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
    >
      <S.Container sx={{ my: 2 }}>
        <Image
          image={cover}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 0, 0, 0.7))",
            transition: "transform 800ms ease",
            transform: `scale(${zoomed ? 1 : 1.15})`,
          }}
        />
        <S.Overlay zoomed={zoomed} />
        <S.Content sx={{ mt: 5, px: 2, py: 2 }}>
          <Styled.h3>{title}</Styled.h3>
          <Styled.p sx={{ fontSize: 2 }}>Published {date}</Styled.p>
        </S.Content>
      </S.Container>
    </S.Link>
  )
}

export default BlogLink

export const fragment = graphql`
  fragment BlogSectionFields on BlogPost {
    id
    slug
    date(fromNow: true)
    title
    excerpt
    cover {
      ...ImageFragment
    }
  }
`

const S = {}

S.Link = styled(Link)``

S.Overlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 800ms ease;
  opacity: ${props => (props.zoomed ? 1 : 0.5)};
`

S.Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
  box-sizing: border-box;
`

S.Content = styled.div`
  color: white;
  text-decoration: none;
  position: relative;
`

S.BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 800ms ease;
  /* position: relative; */
  transform: scale(${props => (props.zoomed ? 1 : 1.15)});
`
