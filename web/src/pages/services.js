import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import ContentContainer from "../components/uContentContainer"
import SEO from "../components/seo"
import ServiceList from "../components/serviceList"
import CtaBgImage from "../components/ctaBgImage"
import FullWidthEditorial from "../components/fullWidthEditorial"
import Partners from "../components/partners"
import ModalCta from "../components/modalCta"

export default function ServicesPage({ data }) {
  const {
    hero,
    services,
    fullWidthCta,
    editorial,
    partners,
    modalCtaImg,
    modalBody,
  } = data
  const imageData = hero.imgLg.asset.fluid

  return (
    <Layout footer={true}>
      <SEO title="Services" />
      <StyledBgImage fluid={imageData}>
        <ContentContainer>
          <StyledHeading>{hero.title}</StyledHeading>
          <StyledBody>{hero.body}</StyledBody>
        </ContentContainer>
      </StyledBgImage>
      <ServiceList services={services.edges} />
      <ModalCta icon={modalCtaImg} content={modalBody} />
      <CtaBgImage
        cta={fullWidthCta}
        link="/services/incident-and-disaster-response"
      />
      <FullWidthEditorial content={editorial} centered={false} />
      <Partners partners={partners} />
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
    hero: sanityPageHero(title: { eq: "Services" }) {
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

    desktop: file(relativePath: { eq: "mario-gogh-VBLHICVh-lI-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    services: allSanityService(
      filter: { slug: { current: { ne: "incident-and-disaster-response" } } }
    ) {
      edges {
        node {
          body
          slug {
            current
          }
          id
          title
          heroImage {
            asset {
              fluid(maxWidth: 600, maxHeight: 300) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
            crop {
              top
              bottom
              left
              right
            }
            hotspot {
              x
              y
            }
          }
        }
      }
    }

    fullWidthCta: sanityFullWidthCta(title: { regex: "/services/i" }) {
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

    editorial: sanityEditorial(title: { regex: "/services/i" }) {
      heading
      body
      img {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      link
    }
    partners: allSanityPartner {
      edges {
        node {
          name
          logo {
            asset {
              fluid(maxWidth: 250) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }

    modalCtaImg: file(relativePath: { eq: "BOTS-Badge 2.png" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    modalBody: sanityModalCta(title: { regex: "/services/i" }) {
      title
      closedHeading
      openHeading
      closedBody
      openBody
    }
  }
`
