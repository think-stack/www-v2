import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/uContentContainer'
import AltHero from '../components/alternateHero'
import ValueCard from '../components/valueCard'
import TeamCard from '../components/teamCard'
import AltFeature from '../components/altFeatureBgImage'
import H2 from '../components/headings/h2'

export default function AboutPage ({data}) {
  const { feature, hero, team, values } = data

  return (
    <Layout showFooter={true}>
      <SEO title='Who We Are' />
      <AltHero hero={hero} />
      <ValueSection>
        <Container>
          <ValueGridContainer>
            {values.edges.map(item => {
              return (
                <ValueCard content={item.node} />
              )
            })}
          </ValueGridContainer>
        </Container>
      </ValueSection>
      <TeamSection>
        <Container>
          <TeamHeading>Team</TeamHeading>
          <TeamGridContainer>
            {team.edges.map(item => {
              return (
                <TeamCard content={item.node} />
              )
            })}
          </TeamGridContainer>
        </Container>
      </TeamSection>
      <AltFeature content={feature} />
    </Layout>
  )
}

const ValueSection = styled.section`
  background-color: var(--lightGreen);
  padding: 5.125rem 0;
`

const ValueGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-row-gap: 2rem;
`

const TeamSection = styled.section`
  padding: 5.4375rem 0;
`

const TeamHeading = styled.h2`
  color: var(--darkGreen);
  font-family: var(--headingFont);
  font-size: 2.375rem;
  font-weight: 300;
  line-height: 3rem;
`

const TeamGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 1.25rem;
  list-style: none;
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

    team: allSanityTeam {
      edges {
        node {
          name
          jobTitle
          bio
          id
          image{
            asset {
              fixed(width: 400, height: 400) {
                ...GatsbySanityImageFixed_noBase64
              }
            }
          }
        }
      }
    }

    feature: sanityFeaturedBgImage(title: {regex: "/who/i"}) {
      title
      heading
      body
      bgImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }
  }
`
