import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export default function FullWidthCta ({ cta: { heading, body, ctaText, bgImg }, link}) {

  return (
    <StyledBgImage fluid={bgImg.asset.fluid} >
      <StyledContainer>
        <StyledHeading>{heading}</StyledHeading>
        <StyledP>{body}</StyledP>
        <StyledLink to={link}>{ctaText}</StyledLink>
      </StyledContainer>
    </StyledBgImage>
  )
}

const StyledBgImage = styled(BackgroundImage)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 20rem;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 550px;
`

const StyledHeading = styled.h2`
  color: var(--white);
  font-size: 39px;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: .75rem;
  text-align: center;
  text-transform: capitalize;
`

const StyledP = styled.p`
  color: var(--white);
  font-size: 1rem;
  line-height: 150%;
  text-align: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  background-color: var(--red);
  border-radius: 2rem;
  color: var(--white);
  font-family: 'TTSupermolot-Regular';
  font-size: .75rem;
  letter-spacing: .2rem;
  line-height: 150%;
  margin-top: 2rem;
  max-width: 155px;
  padding: .75rem 2rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`
