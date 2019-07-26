import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "../components/layout"

const FrontpageTemplate = ({ data }) => (
  <Layout>
    <Styled.h1>{data.frontpageYaml.title}</Styled.h1>
    <Styled.h2>{data.frontpageYaml.subtitle}</Styled.h2>
  </Layout>
)

export default FrontpageTemplate

export const query = graphql`
  query {
    frontpageYaml {
      title
      subtitle
    }
  }
`
