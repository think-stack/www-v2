import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ContentContainer from '../components/uContentContainer'
import H2 from '../components/headings/h2'

export default function FullWidthEditorial ({ content: { heading, body, img }}) {
  return (
    <StyledSection>
      <ContentContainer>
        <StyledGridContainer>
          <StyledContentContainer>
            <H2 heading={heading} color='var(--grey)' />
            <StyledP>{body}</StyledP>
            <StyledLink to='#'>Read More</StyledLink>
          </StyledContentContainer>
          <StyledImgContainer>
            <Img fluid={img.asset.fluid} />
          </StyledImgContainer>
        </StyledGridContainer>
      </ContentContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: rgba(128, 176, 156, 0.2);
  overflow: hidden;
`

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 350px;
  padding-top: 2rem;
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 0;
    max-width: 450px;
  }
`

const StyledHeading = styled.h2`
  color: var(--grey);
  font-size: 39px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 0;
`

const StyledP = styled.p`
  color: var(--black);
  font-size: 1rem;
  line-height: 150%;
`

const StyledLink = styled(Link)`
  color: var(--grey);
  font-size: 1rem;
  font-weight: 900;
  line-height: 150%;
  margin-top: .875rem;
`

const StyledImgContainer = styled.div`
  width: 100%;
`
