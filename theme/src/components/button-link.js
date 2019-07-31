import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const ButtonLink = ({ children, to }) => {
  return <S.Link to={to}>{children}</S.Link>
}

export default ButtonLink

const S = {}

S.Link = styled(Link)`
  --bg-color: ${({ theme }) => theme.colors["primary"]};
  display: inline-block;
  box-sizing: border-box;
  background-color: var(--bg-color);
  padding: 1rem 3rem;
  border-radius: 5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors["background"]};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 200ms ease-in-out;

  :hover {
    filter: brightness(1.15);
  }
`
