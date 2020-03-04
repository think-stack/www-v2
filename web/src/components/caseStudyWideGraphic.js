import React from "react"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import styled from "styled-components"
import H2 from "./headings/h2"

export default function CaseStudyWideGraphic({ node }) {
  const sanityConfig = {
    projectId: `5k1h3ecs`,
    dataset: `prod`,
  }

  const imageAssetId = node.graphic.asset.id
  const fluidProps = getFluidGatsbyImage(
    imageAssetId,
    { maxWidth: 3000 },
    sanityConfig
  )

  return (
    <section>
      <H2
        heading={node.title}
        color="var(--darkGreen)"
        align="center"
        weight="700"
      ></H2>
      <Div>
        <ImgContainer>
          <Img fluid={fluidProps} />
        </ImgContainer>
      </Div>
    </section>
  )
}

const Div = styled.div`
  margin-top: 4rem;
  overflow-x: scroll;
  width: 100%;
`

const ImgContainer = styled.div`
  width: 2500px;
`
