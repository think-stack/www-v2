import React from 'react'
import styled, {css} from 'styled-components'
import posed from 'react-pose'
import BackgroundImage from 'gatsby-background-image'
import ContentContainer from '../components/uContentContainer'
import H2 from '../components/headings/h2'

import linkArrow from '../images/link-arrow--white.svg'

export default function ServicesHero ({img, title, heading, excerpt, transitionStatus}) {

  const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  return (
    <Section truncate={shouldTruncate}>
      <HeroImg fluid={img} truncate={shouldTruncate}>
        <ContentContainer>
          <HeroHeading truncate={shouldTruncate}>{title}</HeroHeading>
        </ContentContainer>
      </HeroImg>
      <ContentContainer>
        <SubHead>
          <H2 heading={heading} color='var(--grey)'></H2>
          <p>{excerpt}</p>
        </SubHead>
      </ContentContainer>
    </Section>
  )
}

const Section = styled.section`
  max-height: ${props => props.truncate ? '7.9375rem' : 'initial'};
  overflow: ${props => props.truncate ? 'hidden' : 'visible'};
`

const HeroImg = styled(BackgroundImage) `
  height: 20.6875rem;
`

const HeroHeading = styled.h1`
  align-self: flex-start;
  bottom: ${props => props.truncate ? '63%' : '1rem'};
  color: var(--white);
  font-size: 48px;
  line-height: 60px;
  position: absolute;

  &:after {
    background-image: url(${linkArrow});
    background-repeat: no-repeat;
    content: '';
    display: ${props => props.truncate ? 'block' : 'none'};
    height: 3rem;
    position: absolute;
    right: -3rem;
    top: 50%;
    transform: rotate(.25turn) translatex(-50%);
    width: 3rem;
  }
`

const SubHead = styled.div`
  margin: 3.875rem auto 4.75rem;

  p {
    color: var(--black);
    font-size: 1.25rem;
    line-height: 170%;
    margin-top: .5rem;
    text-decoration: none;
    width: 38.125rem;
  }
`