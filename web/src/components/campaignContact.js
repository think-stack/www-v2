import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default function CampaignContact ({ content }) {
  return (
    <GridContainer>
      <figure>
        <Img style={{borderRadius: `5rem`}} fluid={content.image.asset.fluid} />
      </figure>
      <Detail>
        <H3>{content.name}</H3>
        <Link href={`tel:${content.tel}`}>{content.tel}</Link>
        <Link href={`mailto:${content.email}`}>{content.email}</Link>
      </Detail>
    </GridContainer>
  )
}

const GridContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  height: 100%;
`

const Detail = styled.div`
`

const H3 = styled.h3`
  font-family: var(--headingFont);
`

const Link = styled.a`
  color: var(--black);
  display: block;
  margin-bottom: .5rem;
`
