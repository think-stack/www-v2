import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

import ContentContainer from "../components/uContentContainer"
import H2 from "../components/headings/h2"
import linkArrow from "../images/link-arrow.svg"

export default function FullWidthEditorial({
  content: { heading, body, img, link },
  centered,
}) {
  const hasLink = link === null || link === "" ? false : true
  return (
    <StyledSection>
      <ContentContainer>
        <StyledGridContainer>
          <StyledContentContainer>
            <H2 heading={heading} color="var(--darkGreen)" />
            <StyledP>{body}</StyledP>

            {hasLink && <StyledLink to={link}>Read More</StyledLink>}
          </StyledContentContainer>
          <StyledImgContainer centered={centered}>
            <Img fluid={img.asset.fluid} />
          </StyledImgContainer>
        </StyledGridContainer>
      </ContentContainer>
    </StyledSection>
  )
}

// testing media query
const size = {
  small: 400,
  med: 900,
  large: 1280,
}

// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `
//   return acc
// }, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const StyledSection = styled.section`
  background-color: rgba(128, 176, 156, 0.2);
  overflow: hidden;

  ${below.med`
    max-height: 90vh;
  `}
`

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-template-rows: 350px;

  @media screen and (min-width: 900px) {
    padding-top: 2rem;
  }

  @media screen and (max-width: 330px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 0;
    max-width: 300px;

    @media screen and (min-width: 410px) {
      max-width: 400px;
    }

    @media screen and (min-width: 500px) {
      max-width: 400px;
    }
  }
`

// const StyledHeading = styled.h2`
//   color: var(--darkGreen);
//   font-size: 39px;
//   font-weight: 300;
//   line-height: 48px;
//   margin-bottom: 0;
// `

const StyledP = styled.p`
  color: var(--black);
  font-size: 1rem;
  line-height: 150%;
`

const StyledLink = styled(Link)`
  color: var(--darkGreen);
  display: inline;
  font-size: 1rem;
  font-weight: 900;
  line-height: 150%;
  margin-top: 0.875rem;
  position: relative;
  width: max-content;

  &:after {
    background-image: url(${linkArrow});
    background-size: contain;
    background-repeat: no-repeat;
    content: "";
    height: 0.75rem;
    left: 105%;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    width: 1rem;
  }
`

const StyledImgContainer = styled.div`
  width: 100%;

  ${props =>
    props.centered &&
    css`
      align-items: center;
      display: flex;
      justify-content: center;

      .gatsby-image-wrapper {
        width: 75%;
      }
    `}
`
