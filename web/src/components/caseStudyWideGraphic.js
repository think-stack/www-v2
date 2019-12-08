import React from 'react'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import Img from 'gatsby-image'

export default function CaseStudyWideGraphic ({node}) {

  const sanityConfig = {
    projectId: `5k1h3ecs`,
    dataset: `prod`,
  }

  const imageAssetId = node.graphic.asset.id
  const fluidProps = getFluidGatsbyImage(imageAssetId, {maxWidth: 3000}, sanityConfig)

  return (
    <Img fluid={fluidProps} />
  )
}
