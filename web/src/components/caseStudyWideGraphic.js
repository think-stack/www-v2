import React from 'react'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function CaseStudyWideGraphic ({node}) {

  const sanityConfig = {
    projectId: `5k1h3ecs`,
    dataset: `prod`,
  }

  const imageAssetId = node.graphic.asset.id
  const fluidProps = getFluidGatsbyImage(imageAssetId, {maxWidth: 3000}, sanityConfig)

  return (
    <Div>
      <ImgContainer>
        <Img fluid={fluidProps} />
      </ImgContainer>
    </Div>
  )
}

const Div = styled.div`
  overflow: scroll;
  width: 100%;
`

const ImgContainer = styled.div`
  width: 2500px;
`
