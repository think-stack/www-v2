import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Container from '../components/uContentContainer'

export default function AltHero ({ hero }) {
  return (
    <Container>
      <GridSection>
        <Body>
          <H1>{hero.heroTitle}</H1>
          <P>{hero.body}</P>
        </Body>
        {/* <ImgWrap> */}
          <Img fluid={hero.bgImage.asset.fluid} style={{alignSelf: `center`, justifySelf: `center`, width: `100%`}}/>
        {/* </ImgWrap> */}
      </GridSection>
    </Container>
  )
}

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 2rem;
  min-height: 90vh;
  padding: 2rem;

  @media screen and (max-width: 37.5rem) {
    padding: 0;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H1 = styled.h1`
  color: var(--darkGreen);
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.75rem;
  margin-top: 10.9375rem;
  text-transform: capitalize;
`

const P = styled.p`
  font-size: 1.25rem;
  max-width: 80%;
  line-height: 150%;
`
