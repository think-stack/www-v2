import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/uContentContainer'
import H2 from '../components/headings/h2'

export default function ContactPage ({ data }) {
  const { hero: { heroTitle: title, body }} = data
  return (
    <Layout showFooter={true}>
      <SEO title='Contact' />
      <Section>
        <Container>
          <GridContainer>
            <Form>
              <H2 heading={title} color='var(--darkGreen)'></H2>
              <p>{ body }</p>
              <HiddenLabel>name</HiddenLabel>
              <Input type='text' placeholder='Name' pattern="\S+" />
              <HiddenLabel>email</HiddenLabel>
              <Input type='email' placeholder='Email' pattern="\S+" />
              <HiddenLabel>subject</HiddenLabel>
              <Input type='text' placeholder='Subject' pattern="\S+" />
              <HiddenLabel>text field</HiddenLabel>
              <TextArea placeholder='Message' rows='10' cols='50' />
            </Form>
            <MapWrapper>
              <iframe height="500" frameBorder="0" style={{border: `0`, width: `100%`}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJAdwx2xdp-XRnl0EVNl5G3qNYk6EPfbA&amp;q=1300+thames+st+baltimore+md&amp;zoom=14"></iframe>
              <div className="address">
                <Address>1300 thames st</Address>
                <Address>ground suite #20</Address>
                <Address>baltimore, MD 21231</Address>
                <Phone href="tel:+14105605601">410 560-5601</Phone>
              </div>
            </MapWrapper>
          </GridContainer>
        </Container>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12.75rem;
  min-height: 90vh;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(75rem / 2), 1fr));
  grid-column-gap: 1.25rem;
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
  padding: .25rem;
  margin: 0 auto 1rem 0;
  width: 80%;

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
  font-family: 'TTSupermolot-Regular', sans-serif;
  font-size: 1.25em;
  padding: .25em;
  margin: 0 auto 1em 0;
  width: 80%;

  &:focus {
    color: var(--darkGreen);
  }
`

const MapWrapper = styled.div`

`

const Address = styled.p`
  color: var(--darkGreen);
  margin-bottom: 1em;
  text-align: right;
  text-transform: capitalize;
`

const Phone = styled.a`
  color: var(--darkGreen);
  display: block;
  margin-bottom: 1em;
  text-align: right;
  text-transform: capitalize;
`
export const query = graphql`
  query ContactQuery {
    hero: sanityPageHero(title: {regex: "/contact/i"}) {
      heroTitle
      body
    }
  }
`
