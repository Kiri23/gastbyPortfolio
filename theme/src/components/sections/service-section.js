/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Section from "../section"
import Service from "../service"

const ServiceSection = ({ services }) => {
  return (
    <Section>
      <S.Container>
        {services.map(service => (
          <Service {...service} />
        ))}
      </S.Container>
    </Section>
  )
}

export default ServiceSection

const S = {}

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
