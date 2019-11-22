import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Container from '../components/uContentContainer'

import linkArrow from '../images/link-arrow.svg'

export default function FeatureBgImage ({content: { bgImage, body, heading, list, ctaText}}) {
  const imgData = bgImage.asset.fluid

  return (
    <BgImage fluid={imgData}>
      <Container>
        <TextContainer>
          <Heading>{heading}</Heading>
          <p>{body}</p>
          <List>
            {list.map(item => {
              return (
                <ListItem key={item._key}>{item.item}</ListItem>
              )
            })}
          </List>
          <StyledLink to='/services'>{ctaText}</StyledLink>
        </TextContainer>
      </Container>
    </BgImage>
  )
}

const BgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 42rem;
`

const TextContainer = styled.div`
  background-color: var(--white);
  margin: 1rem auto;
  padding: 1rem;
  max-width: 95%;
  width: 41.0625rem;

  @media screen and (min-width: 50rem) {
    margin: auto auto auto 0;
    padding: 3.25rem 4.6875rem 2rem 6.0625rem;
  }
`

const Heading = styled.h2`
  color: var(--darkGreen);
  font-size: 2rem;
  font-weight: 900;
  line-height: 2.375rem;
`

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  color: var(--darkGreen);
  font-family: var(--headingFont);
  font-size: 1.4375rem;
  font-weight: 300;
  line-height: 2rem;

  @media screen and (min-width: 40rem) {
    font-size: 2.4375rem;
    line-height: 3rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--darkGreen);
  display: inline;
  font-size: 1rem;
  font-weight: 900;
  line-height: 150%;
  margin-top: .875rem;
  position: relative;
  width: max-content;

  &:after {
    background-image: url(${linkArrow});
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    height: .75rem;
    left: 105%;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    width: 1rem;
  }
`
