import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import ContentContainer from "../components/uContentContainer"
import H2 from "../components/headings/h2"

import linkArrow from "../images/link-arrow--white.svg"

export default function ServicesHero({
  img,
  title,
  heading,
  excerpt,
  transitionStatus,
}) {
  const shouldTruncate = ["entering", "entered"].includes(transitionStatus)

  return (
    <Section truncate={shouldTruncate}>
      <HeroImg fluid={img} truncate={shouldTruncate}>
        <ContentContainer>
          <HeroHeading truncate={shouldTruncate}>{title}</HeroHeading>
        </ContentContainer>
      </HeroImg>
      <ContentContainer>
        <SubHead>
          <H2 heading={heading} color="var(--darkGreen)"></H2>
          <p>{excerpt}</p>
        </SubHead>
      </ContentContainer>
    </Section>
  )
}

const Section = styled.section`
  max-height: ${props => (props.truncate ? "7.9375rem" : "initial")};
  overflow: ${props => (props.truncate ? "hidden" : "visible")};
`

const HeroImg = styled(BackgroundImage)`
  height: 20.6875rem;
`

const HeroHeading = styled.h1`
  align-self: flex-start;
  bottom: ${props => (props.truncate ? "63%" : "1rem")};
  color: var(--white);
  font-size: 28px;
  line-height: 50px;
  position: absolute;

  @media screen and (min-width: 600px) {
    font-size: 48px;
    line-height: 60px;
  }

  &:after {
    background-image: url(${linkArrow});
    background-repeat: no-repeat;
    content: "";
    display: ${props => (props.truncate ? "block" : "none")};
    height: 2rem;
    position: absolute;
    right: -3rem;
    top: 50%;
    transform: rotate(0.25turn) translatex(-50%);
    width: 2rem;

    @media screen and (min-width: 600px) {
      height: 3rem;
      width: 3rem;
    }
  }
`

const SubHead = styled.div`
  margin: 3.875rem auto 4.75rem;

  p {
    color: var(--black);
    font-size: 1.25rem;
    line-height: 170%;
    margin-top: 0.5rem;
    max-width: 95%;
    text-decoration: none;
    width: 38.125rem;
  }
`
