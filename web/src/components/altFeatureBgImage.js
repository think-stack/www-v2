import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Container from '../components/uContentContainer'

export default function AltFeatureBgImg ({content}) {
  return (
    <BgImage fluid={content.bgImage.asset.fluid}>
      <Container>
        <TextContainer>
          <Heading>{content.heading}</Heading>
          <p>{content.body}</p>
          <CTA>
            <p>Want to read more? Get your digital Book of Think|Stack for free.</p>
            <Form>
              <input placeholder='email'/>
              <button>get your book</button>
            </Form>
          </CTA>
        </TextContainer>
      </Container>
    </BgImage>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;

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
  }
`

const BgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 65vh;
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
