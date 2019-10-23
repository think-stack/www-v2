import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import ContentContainer from '../components/uContentContainer'
import SEO from "../components/seo"
// import Img from "gatsby-image"
import ServiceList from '../components/serviceList'
import FullWidthCta from "../components/fullWidthCta"
import FullWidthEditorial from '../components/fullWidthEditorial'
import Partners from '../components/partners'

export default function ServicesPage({ data }) {

  const { hero, services, fullWidthCta, editorial } = data
  const imageData = hero.imgLg.asset.fluid

  return(
    <Layout>
      <SEO title="Services" />
      <StyledBgImage fluid={imageData}>
        <ContentContainer>
          <StyledHeading>{hero.title}</StyledHeading>
          <StyledBody>{hero.body}</StyledBody>
        </ContentContainer>
      </StyledBgImage>
      <ServiceList services={services.edges}/>
      <FullWidthCta cta={fullWidthCta} />
      <FullWidthEditorial content={editorial} />
      <Partners />
    </Layout>
  )
}

const StyledBgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 90vh;
  padding-bottom: 4rem;
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
    hero: sanityPageHero(title: {eq: "Services"}) {
      title
      body

      imgLg: bgImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }

    desktop: file(relativePath: {eq: "mario-gogh-VBLHICVh-lI-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImg: file(relativePath: {eq: "temp-service-card.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    services: allSanityService {
      edges {
        node {
          body
          slug {
            current
          }
          id
          title
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }

    fullWidthCta: sanityFullWidthCta(title: {regex: "/services/i"}) {
      heading
      body
      ctaText
      bgImg {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }

    editorial: sanityEditorial(title: {regex: "/services/i"}) {
      heading
      body
      img {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }
  }
`
