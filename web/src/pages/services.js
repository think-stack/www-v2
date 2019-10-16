import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

export default function ServicesPage({ data }) {

  const imageData = data.desktop.childImageSharp.fluid

  return(
    <Layout >
      <SEO title="Services" />
      <StyledBgImage fluid={imageData}>
        <StyledContainer>
          <StyledHeading>services</StyledHeading>
          <StyledBody>Pellentesque libero nulla, rhoncus ultrices rhoncus vel, efficitur ac ligula. Sed ipsum risus, suscipit et diam in, feugiat pretium nisi.</StyledBody>
        </StyledContainer>
      </StyledBgImage>
    </Layout>
  )
}

const StyledBgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 90vh;
`
const StyledContainer = styled.div`
  margin-bottom: 48px;
  margin-left: 100px;
`

const StyledHeading = styled.h1`
  color: var(--white);
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 0;
  text-transform: capitalize;
`

const StyledBody = styled.p`
  color: var(--white);
  font-size: 16px;
  line-height: 150%;
  max-width: 550px;
`

export const query = graphql`
  query ServicesQuery {
    desktop: file(relativePath: {eq: "mario-gogh-VBLHICVh-lI-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
