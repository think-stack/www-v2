import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Grid, Box } from "@material-ui/core"

export default function CampaignContact({ content }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} lg={6}>
        <figure>
          <Img
            style={{ borderRadius: `50%`, width: 200, height: 200 }}
            fluid={content.image.asset.fluid}
          />
        </figure>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box height="100%" display="flex" alignItems="center">
          <Box>
            <H3>{content.name}</H3>
            <Link href={`tel:${content.tel}`}>{content.tel}</Link>
            <Link href={`mailto:${content.email}`}>{content.email}</Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

const H3 = styled.h3`
  font-family: var(--headingFont);
`

const Link = styled.a`
  color: var(--black);
  display: block;
  margin-bottom: 0.5rem;
`
