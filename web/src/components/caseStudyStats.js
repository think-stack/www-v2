import React from 'react'
import styled from 'styled-components'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import Container from './uContentContainer'
import BackgroundImage from 'gatsby-background-image'

export default function CaseStudyStats ({node}) {

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
          { node.stats.map(item => {
            return (
              <FlexItem>
                <Stat>{item.stat}</Stat>
                <Support>{item.supportingInfo}</Support>
              </FlexItem>
            )
            })
          }
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
  min-height: 50vh;
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
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  text-align: center;
  width: 100%;
`

const FlexItem = styled.div`
  flex: 0 0 40%;
  margin-bottom: 2rem;
  position: relative;
  z-index: 3;
`

const Stat = styled.h2`
  color: var(--white);
  font-family: var(--headingFont);
  font-size: 2.4375rem;
`

const Support = styled.p`
  color: var(--white);
`
