/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Section from "../section"
import Image from "../image"

const ServiceSection = ({ services }) => {
  return (
    <Section>
      <Styled.h1>Services</Styled.h1>
      <div>
        {services.map(service => (
          <article key={service.id} sx={{ my: 3 }}>
            <Image image={service.illustration} alt={service.title} />
            <Styled.h3>{service.title}</Styled.h3>
            <Styled.p>{service.excerpt}</Styled.p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default ServiceSection

export const fragment = graphql`
  fragment ServiceSectionFields on Service {
    id
    slug
    title
    excerpt
    illustration {
      ...ImageFragment
    }
  }
`
