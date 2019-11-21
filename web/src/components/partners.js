import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import ContentContainer from './uContentContainer'
import H2 from './headings/h2'
import linkArrow from '../images/link-arrow.svg'

export default function Partners () {
  return (
    <StyledSection>
      <ContentContainer>
        <H2 heading='tech partners' color='var(--darkGreen)' align='center' />
        <StyledContent>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StyledContent>
        {/* <StyledLink to='/#'>tech stack</StyledLink> */}
      </ContentContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 3.5rem 0 5.9375rem;
`

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem 0 1.75rem;
  max-width: 100%;

  div {
    background-color: #c4c4c4;
    border-radius: 5rem;
    height: 8.875rem;
    margin-bottom: 3rem;
    width: 8.875rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--darkGreen);
  display: block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  margin: 0 auto;
  position: relative;
  text-transform: capitalize;
  width: 5.875rem;

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
