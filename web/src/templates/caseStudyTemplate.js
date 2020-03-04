import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/uContentContainer"
import BackgroundImage from "gatsby-background-image"
import H2 from "../components/headings/h2"
import PortableText from "../components/portableText/portableText"

export default function CaseStudy({ data }) {
  const { caseStudy: cs } = data
  return (
    <Layout>
      <Hero fluid={cs.heroImage.asset.fluid}>
        <Container>
          <H2 heading={cs.title} color={`var(--white)`} />
          <p>{cs.hero}</p>
        </Container>
      </Hero>
      <PortableText blocks={cs._rawContent} />
    </Layout>
  )
}

const Hero = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  min-height: 75vh;
  padding-bottom: 2rem;

  p {
    color: var(--white);
    font-size: 1rem;
    line-height: 150%;
  }
`

export const query = graphql`
  query CaseStudyQuery($id: String!) {
    caseStudy: sanityCaseStudy(id: { eq: $id }) {
      title
      hero
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`
