import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import Container from '../components/uContentContainer'
import HubspotForm from 'react-hubspot-form'

export default function AltFeatureBgImg ({content}) {
  return (
    <BgImage fluid={content.bgImage.asset.fluid} style={{position: `relative`}}>
      <Container>
        <GridContainer>
          <TextContainer>
            <Heading>{content.heading}</Heading>
            <p>{content.body}</p>
            <CTA>
              <p>Want to read more? Get your digital Book of Think|Stack for free.</p>
              <Form>
                <HubspotForm
                  portalId="6503958"
                  formId="035553fc-2d30-4361-a690-d04ec4dfaa9f"
                  onSubmit={() => console.log("Submit!")}
                  onReady={form => console.log("Form ready!")}
                  loading={<div>Loading...</div>}
                />
              </Form>
            </CTA>
          </TextContainer>
          <ImgWrapper>
            <Img fluid={content.secImage.asset.fluid}  />
          </ImgWrapper>
        </GridContainer>
      </Container>
    </BgImage>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;

  @media screen and (max-width: 37.5rem) {
    flex-direction: column;
  }

  input {
    border: 2px solid var(--darkGreen);
    flex: 0 1 50%;
    padding: .5rem;
  }

  button {
    background-color: var(--white);
    border: 2px solid var(--grey);
    border-radius: 1.75rem;
    flex: 0 1 11.875rem;
    font-family: var(--headingFont);
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: .1rem;
    text-transform: capitalize;

    @media screen and (max-width: 37.5rem) {
      margin-top: 1.5rem;
      max-height: 3.125rem;
      max-width: 75%;
    }
  }
`

const BgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 2rem;
  margin: 4rem auto 0;
  padding-bottom: 2rem;
  overflow: hidden;s
`

const TextContainer = styled.div`
  background-color: var(--white);
  margin: 1rem auto;
  padding: 1.75rem 1.75rem 2.5rem 1.75rem;
  max-width: 95%;
  width: 32.125rem;

  @media screen and (min-width: 50rem) {
    margin: auto auto auto 0;
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;

  .gatsby-image-wrapper {
    margin: auto;
    top: -.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 23.125rem;

    @media screen and (min-width: 37.5rem) {
      position: absolute !important;
    }
  }
`

const Heading = styled.h2`
  color: var(--darkGreen);
  font-family: var(--headingFont);
  font-size: 2.4375rem;
  font-weight: 300;
  margin-bottom: .75rem;
  line-height: 3rem;
`

const CTA = styled.div`

  p {
    font-weight: 700;
    margin-left: 0;
    max-width: 80%;
  }
`
