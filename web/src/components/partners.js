import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ContentContainer from "./uContentContainer"
import H2 from "./headings/h2"

export default function Partners({ partners }) {
  return (
    <StyledSection>
      <ContentContainer>
        <H2 heading="tech partners" color="var(--darkGreen)" align="center" />
        <StyledContent>
          {partners.edges.map(item => {
            return (
              <figure>
                <Img fluid={item.node.logo.asset.fluid} />
              </figure>
            )
          })}
        </StyledContent>
      </ContentContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 3.5rem 0 5.9375rem;
`

const StyledContent = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(calc(72rem / 6), 1fr));
  margin-top: 2rem;

  figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .gatsby-image-wrapper {
    margin-bottom: 3rem;
    width: 200px;
  }
`
