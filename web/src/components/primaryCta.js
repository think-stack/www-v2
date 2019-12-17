import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

export default function Cta ({ content: {heading, body, cta, link}}) {
  return (
    <StyledContainer>
      <StyledHeading>{heading}</StyledHeading>
      <StyledP>{body}</StyledP>
      <StyledLink to={link}>{cta}</StyledLink>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.875rem auto 4.5rem;
  max-width: 550px;
`

const StyledHeading = styled.h2`
  color: var(--darkGreen);
  font-size: 39px;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: .75rem;
  text-align: center;
  text-transform: capitalize;
`

const StyledP = styled.p`
  color: var(--black);
  font-size: 1rem;
  line-height: 150%;
  text-align: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  background-color: var(--green);
  border-radius: 2rem;
  color: var(--white);
  font-family: 'TTSupermolot-Regular';
  font-size: .75rem;
  font-weight: 900;
  letter-spacing: .2rem;
  line-height: 150%;
  margin-top: 2rem;
  max-width: 10.3125rem;
  min-width: 7.5625rem;
  padding: .75rem 2rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`
