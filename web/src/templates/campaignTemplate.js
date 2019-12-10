import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/uContentContainer'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import H2 from '../components/headings/h2'
import Form from '../components/campaignForm'
import Event from '../components/campaignEvents'
import CampaignEvent from '../components/campaignEvents'
import Contact from '../components/campaignContact'
// import PortableText from '../components/portableText/portableText'

export default function Campaign({ data }) {

  const { campaign } = data
  return (
    <Layout showFooter={true}>
      <Container>
        <Hero>
          <HeroContainer>
            <H2 heading={campaign.title} color={`var(--darkGreen)`} />
            <p>{campaign.heroBody}</p>
          </HeroContainer>
        </Hero>
        <H2 heading={campaign.featTitle} color={`var(--darkGreen)`} align={`center`} />
      </Container>
        <Img style={{margin: `3rem 0 5rem`, height: `85vh`, overflow: `visible`}} fluid={campaign.featImage.asset.fluid} />
      <Container>
        <H2 heading={campaign.formHeading} color={`var(--darkGreen)`} align={`center`} />
        {/* <H2 heading={campaign.formHeading} color={`var(--darkGreen`} align={`center`} /> */}
        <Form />
        <FlexContainer>
          <EventContainer>
            {campaign.events.map(event => {
              return (
                <CampaignEvent content={event} />
              )
            })}
          </EventContainer>
          <ContactContainer>
            <Contact content={campaign.contact[0]} />
          </ContactContainer>
        </FlexContainer>
      </Container>
      {/* <PortableText blocks={cs._rawContent} /> */}
    </Layout>
  )
}

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 75vh;
`

const HeroContainer = styled.div`
  margin: auto auto 3rem auto;
  max-width: 90%;

  p {
    margin: 1.5rem auto 0;
    max-width: 100%;
    width: 50rem;
  }
`

const FlexContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2%;
`

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2%;
`

const ContactContainer = styled.div`
`

export const query = graphql`
  query Campaign($id: String!) {
    campaign: sanityCampaign(id: {eq: $id}) {
      title
      heroBody
      featTitle
      featImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      formHeading
      events {
        title
        url
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
      contact {
        heading
        name
        tel
        email
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
    }
  }
`
