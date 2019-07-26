import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer as StyledFooter,
} from "theme-ui"

import Navigation from "./navigation"
import Footer from "./footer.js"

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
          nav {
            margin: auto;
            width: 850px;
            padding: 32px;
            display: flex;
            justify-content: space-around;
            a {
              color: white;
              text-decoration: none;
            }
            a[aria-current="page"] {
              color: aquamarine;
            }
          }
        `}
      />
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledLayout>
  )
}

export default Layout
