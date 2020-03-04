import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default function CampaignEvent({ content }) {
  return (
    <StyledLink to={content.url}>
      <Figure>
        <Img fluid={content.image.asset.fluid} />
      </Figure>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  width: 100%;
`

const Figure = styled.figure`
  height: auto;
  width: 100%;
`
