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

        <Img style={{margin: `3rem 0 5rem`, height: `85vh`, overflow: `visible`}} imgStyle={{objectFit: `contain`}} fluid={campaign.featImage.asset.fluid} />

        <H2 heading={campaign.formHeading} color={`var(--darkGreen)`} align={`center`} />
        {/* <H2 heading={campaign.formHeading} color={`var(--darkGreen`} align={`center`} /> */}
        <Form />
        <FlexContainer>
          <EventContainer>
            <H2 heading={`Happy People`} color={`var(--darkGreen)`} align={`left`} />
            {campaign.events.map(event => {
              return (
                <CampaignEvent content={event} />
              )
            })}
          </EventContainer>
          <ContactContainer>
            <H2 heading={campaign.contact[0].heading} color={`var(--darkGreen)`} align={`center`} />
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
  margin: 10rem auto 3rem auto;
  max-width: 90%;

  @media screen and (min-width: 48rem) {
    margin: auto auto 3rem auto;
  }

  p {
    margin: 1.5rem auto 0;
    max-width: 100%;
    width: 50rem;
  }
`

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const EventContainer = styled.div`
  display: grid;
  flex: 1 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(301px, 1fr));
  grid-column-gap: 2%;

  h2 {
    grid-column: 1/-1;
  }
`

const ContactContainer = styled.div`
  margin: auto;
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
