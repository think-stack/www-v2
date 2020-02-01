import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/uContentContainer"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import H2 from "../components/headings/h2"
import Form from "../components/campaignForm"
import Event from "../components/campaignEvents"
import CampaignEvent from "../components/campaignEvents"
import Contact from "../components/campaignContact"
// import PortableText from '../components/portableText/portableText'
import { Grid, Box } from "@material-ui/core"

export default function Campaign({ data }) {
  const { campaign } = data
  // color={`var(--darkGreen)`}
  return (
    <Layout showFooter={true}>
      <Container>
        <Box mt={30}>
          <Grid container spacing={10}>
            <Grid item xs={12} lg={6}>
              <H2 heading={campaign.title} color={`var(--darkGreen)`} />
              <Box mt={4}>{campaign.heroBody}</Box>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
          </Grid>
        </Box>
        <Box mt={10}>
          <H2
            heading={campaign.featTitle}
            color={`var(--darkGreen)`}
            align={`center`}
          />
          <Box mt={5}>
            <Img
              imgStyle={{ objectFit: `contain` }}
              fluid={campaign.featImage.asset.fluid}
            />
          </Box>
        </Box>
        <Box mt={10}>
          <H2
            heading={campaign.formHeading}
            color={`var(--darkGreen)`}
            align={`center`}
          />
          <Form />
        </Box>
      </Container>
      <Box mt={10} py={10} bgcolor="#E6EFEB">
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} lg={6}>
              <H2
                heading={`Happy People`}
                color={`var(--darkGreen)`}
                align={`left`}
              />
              <Box mt={7}>
                {campaign.events.map(event => {
                  return (
                    <Box maxWidth="200px" m={3}>
                      <CampaignEvent content={event} />
                    </Box>
                  )
                })}
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <H2
                heading={campaign.contact[0].heading}
                color={`var(--darkGreen)`}
                align={`center`}
              />
              <Box mt={7}>
                <Contact content={campaign.contact[0]} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query Campaign($id: String!) {
    campaign: sanityCampaign(id: { eq: $id }) {
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
