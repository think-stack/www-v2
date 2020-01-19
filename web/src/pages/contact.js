import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/uContentContainer"
import H2 from "../components/headings/h2"

export default function ContactPage({ data }) {
  const {
    hero: { heroTitle: title, body },
  } = data
  return (
    <Layout showFooter={true}>
      <SEO title="Contact" />
      <Section>
        <Container>
          <GridContainer>
            <div>
              <H2 heading={title || "Contact"} color="var(--darkGreen)"></H2>
              <p>{body || ""}</p>
              <MapWrapper>
                <iframe
                  height="300"
                  frameBorder="0"
                  style={{ border: `0`, width: `75%` }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJAdwx2xdp-XRnl0EVNl5G3qNYk6EPfbA&amp;q=1300+thames+st+baltimore+md&amp;zoom=14"
                ></iframe>
              </MapWrapper>
              <div className="address">
                <Address>1300 thames st</Address>
                <Address>ground suite #20</Address>
                <Address>baltimore, MD 21231</Address>
                <Phone href="tel:+14105605601">410 560-5601</Phone>
              </div>
            </div>
            <Form>
              <HiddenLabel>name</HiddenLabel>
              <Input type="text" placeholder="Name" pattern="\S+" />
              <HiddenLabel>email</HiddenLabel>
              <Input type="email" placeholder="Email" pattern="\S+" />
              <HiddenLabel>subject</HiddenLabel>
              <Input type="text" placeholder="Subject" pattern="\S+" />
              <HiddenLabel>text field</HiddenLabel>
              <TextArea placeholder="Message" rows="10" cols="50" />
              <Button type="submit">submit</Button>
            </Form>
          </GridContainer>
        </Container>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 12.75rem;
  min-height: 90vh;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(65rem / 2), 1fr));
  grid-column-gap: 3.25rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Input = styled.input`
  border: 2px solid;
  border-color: var(--green);
  color: var(--green);
  font-family: var(--headingFont);
  font-size: 1.25rem;
  padding: 0.25rem;
  margin: 0 auto 1rem 0;
  width: 100%;

  &:focus {
    color: var(--darkGreen);
  }

  &:invalid {
    border-color: var(--red);
  }
`

const TextArea = styled.textarea`
  border: 2px solid var(--green);
  color: var(--green);
  font-family: "TTSupermolot-Regular", sans-serif;
  font-size: 1.25em;
  padding: 0.25em;
  margin: 0 auto 1em 0;
  width: 100%;

  &:focus {
    color: var(--darkGreen);
  }
`

const MapWrapper = styled.div``

const Address = styled.p`
  color: var(--darkGreen);
  text-transform: capitalize;
  margin-bottom: 0;
`

const Phone = styled.a`
  color: var(--darkGreen);
  display: block;
  margin-top: 1em;
  text-transform: capitalize;
`
const Button = styled.button`
  background-color: var(--green);
  border-radius: 2rem;
  color: var(--white);
  font-family: "TTSupermolot-Regular";
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  line-height: 150%;
  margin-top: 2rem;
  max-width: 10.3125rem;
  min-width: 6.5625rem;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  border: 0;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }
`
export const query = graphql`
  query ContactQuery {
    hero: sanityPageHero(title: { regex: "/contact/i" }) {
      heroTitle
      body
    }
  }
`
