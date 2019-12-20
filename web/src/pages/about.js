import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/uContentContainer'
import AltHero from '../components/alternateHero'
import ValueCard from '../components/valueCard'
import H2 from '../components/headings/h2'

export default function AboutPage ({data}) {
  const { hero, values } = data

  return (
    <Layout showFooter={true}>
      <SEO title='Who We Are' />
      <AltHero hero={hero} />
      <Section>
        <Container>
          <GridSection>
            {values.edges.map(item => {
              return (
                <ValueCard content={item.node} />
              )
            })}
          </GridSection>
        </Container>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  background-color: var(--lightGreen);
  padding: 5.125rem 0;
`

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-row-gap: 2rem;
`

export const query = graphql`
  query AboutQuery {
    hero: sanityPageHero(title: {regex: "/who/i"}) {
      heroTitle
      body
      bgImage {
        asset {
          fixed(width: 500) {
            ...GatsbySanityImageFixed_noBase64
          }
        }
      }
    }

    values: allSanityValue {
      edges {
        node {
          id
          title
          body
          icon {
            asset {
              fixed(width: 120) {
                ...GatsbySanityImageFixed_noBase64
              }
            }
          }
        }
      }
    }
  }
`
