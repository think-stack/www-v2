import React from 'react'
import styled from 'styled-components'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'

import Container from '../components/uContentContainer'
import BackgroundImage from 'gatsby-background-image'

export default function CaseStudyQuote ({node}) {

  const sanityConfig = {
    projectId: `5k1h3ecs`,
    dataset: `prod`,
  }

  const imageAssetId = node.bgImage.asset.id
  const fluidProps = getFluidGatsbyImage(imageAssetId, {maxWidth: 1920}, sanityConfig)

  return (
    <BgImage fluid={fluidProps}>
      <Container>
        <FlexContainer>
          <Quote>{node.quote}</Quote>
          <Author>{node.author}</Author>
        </FlexContainer>
      </Container>
    </BgImage>
  )
}

const BgImage = styled(BackgroundImage)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;
  min-height: 75vh;
  position: relative;

  &:after {
    background: var(--black);
    content: '';
    height: 100%;
    left: 0;
    opacity: .75 !important;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2 !important;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2%;
  position: relative;
  z-index: 3;
`

const Quote = styled.p`
  color: var(--white);
  font-family: var(--headingFont);
  font-size: 2.4375rem;
  font-weight: 500;
  line-height: 3.75rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 3;

  &:before,
  &:after {
    font-size: 4rem;
  }


  &:before {
    content: '"';
    left: -1.5rem;
    position: absolute;
  }

  &:after {
    bottom: 0;
    content: '"';
    position: relative;
    right: 0;
  }
`

const Author = styled.p`
  color: var(--white);
  margin-left: 1rem;
  position: relative;

  &:after {
    background-color: var(--white);
    content: '';
    height: 2px;
    left: -1rem;
    position: absolute;
    top: 50%;
    width: .5rem;
  }
`
