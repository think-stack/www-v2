import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ContentContainer from '../components/uContentContainer'
export default function FullWidthEditorial ({ content: { heading, body, img }}) {
  return (
    <StyledSection>
      <ContentContainer>
        <StyledGridContainer>
          <StyledContentContainer>
            <StyledHeading>{heading}</StyledHeading>
            <StyledP>{body}</StyledP>
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

const StyledImgContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
`
