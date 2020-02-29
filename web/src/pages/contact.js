import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import H2 from "../components/headings/h2"
import HubspotForm from "react-hubspot-form"
import { Container, Grid, Box } from "@material-ui/core"

export default function ContactPage({ data }) {
  const {
    hero: { heroTitle: title, body },
  } = data

  return (
    <Layout>
      <SEO title="Contact" />
      <Box mt={20}>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} lg={6}>
              <H2 heading={title || "Contact"} color="var(--darkGreen)"></H2>
              <p>{body || ""}</p>
              <Box>
                <iframe
                  title="map"
                  height="300"
                  frameBorder="0"
                  style={{ border: `0`, width: `100%` }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJAdwx2xdp-XRnl0EVNl5G3qNYk6EPfbA&amp;q=1300+thames+st+baltimore+md&amp;zoom=14"
                ></iframe>
              </Box>
              <div className="address">
                <div>1300 Thames St</div>
                <div>Ground Suite #20</div>
                <div>Baltimore, MD 21231</div>
                <phone href="tel:+14105605601">410 560-5601</phone>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <HubspotForm
                portalId="6503958"
                formId="90789743-fb50-4018-9e17-c66061e6dec8"
                onSubmit={() => console.log("Submit!")}
                onReady={form => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    hero: sanityPageHero(title: { regex: "/contact/i" }) {
      heroTitle
      body
    }
  }
`
