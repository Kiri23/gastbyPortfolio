/** @jsx jsx */
import { jsx } from "theme-ui"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer as StyledFooter,
  ThemeProvider,
} from "theme-ui"
import theme from "gatsby-plugin-theme-ui"

import "@fortawesome/fontawesome-free/css/all.css"

import Navigation from "./navigation"
import Footer from "./footer.js"

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Header>
          <Navigation />
        </Header>
        <Main>
          <Container {...props}>{children}</Container>
        </Main>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
