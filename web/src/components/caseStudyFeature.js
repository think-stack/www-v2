import React from 'react'
import Img from "gatsby-image"
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import styled from 'styled-components'

import Container from '../components/uContentContainer'
import H2 from '../components/headings/h2'


export default function CaseStudyFeature ({ node }) {

  const sanityConfig = {
    projectId: `5k1h3ecs`,
    dataset: `prod`,
  }

  const imageAssetId = node.image.asset.id
  const fluidProps = getFluidGatsbyImage(imageAssetId, {maxWidth: 1280}, sanityConfig)

  return (
    <Section>
      <Container>
        <H2 heading={node.peopleTitle} />
        <P>{node.peopleBody}</P>
        <FeatureImage fluid={fluidProps} />
        <H2 heading={node.techTitle} />
        <P marginLeft='auto' marginRight='0'>{node.techBody}</P>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 5rem;

  h2 {
    &:nth-child(2n) {
      margin-left: auto;
      max-width: 40rem;
    }
  }
`

const FeatureImage = styled(Img)`
  margin: auto auto 2rem;
  width: 50%;
`

const P = styled.p`
  margin-bottom: 2rem;
  margin-top: 1.5rem;
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || 'auto'};
  max-width: 40rem;
`
