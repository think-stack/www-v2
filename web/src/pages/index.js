import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BgImageHero from '../components/bgImageHero'
import HpFeatures from '../components/hpFeatures'
import FullWidthEditorial from '../components/fullWidthEditorial'
import FeatureBgImage from '../components/featureBgImage'
import Cta from '../components/primaryCta'
import featuredBgImage from "../../../studio/schemas/documents/featuredBgImage"

const IndexPage = ({ data }) => {
  const {
    hero: {
      bgImage,
      heroTitle,
      body
    },
    features,
    editorial,
    featureBgImage,
    cta,
  } = data
  const heroImage = bgImage.asset.fluid
  return (
    <Layout showFooter={true}>
      <SEO title="Home" />
      <BgImageHero imgData={heroImage} heading={heroTitle} body={body}/>
      <HpFeatures data={features.edges[0].node} />
      <FullWidthEditorial content={editorial} centered={true} />
      <FeatureBgImage content={featureBgImage} />
      <Cta content={cta} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {

    hero: sanityPageHero(title: {regex: "/home/i"}) {
      heroTitle
      body
      bgImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }

    features:   allSanityFeatures {
      edges {
        node {
          title
          features {
            _key
            title
            featBody
          }
        }
      }
    }

    editorial: sanityEditorial(title: {regex: "/home/i"}) {
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

    featureBgImage: sanityFeaturedBgImage(title: {regex: "/home/i"}) {
      bgImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      heading
      body
      list {
        item
        _key
      }
      ctaText
    }

    cta: sanityStandardCta(title: {regex: "/home/i"}) {
      heading
      body
      cta
    }
  }
`
