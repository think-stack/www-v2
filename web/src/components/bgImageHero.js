import React from 'react'
import styled, {css} from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import ContentContainer from '../components/uContentContainer'

export default function BgImageHero ({ imgData, heading, body }) {
  return (
    <StyledBgImage fluid={imgData}>
      <ContentContainer>
        <H1>{heading}
        <Span>{body}</Span>
        </H1>
      </ContentContainer>
    </StyledBgImage>
  )
}

const StyledBgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  min-height: 37.5625rem;
`

const H1 = styled.h1`
  color: var(--grey);
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4375rem;
  margin-top: 10.9375rem;
  text-transform: capitalize;
`

const Span = styled.span`
  color: var(--grey);
  display: block;
  font-family: var(--headingFont);
  font-size: 3rem;
  font-weight: 900;
  line-height: 3.75rem;
`
