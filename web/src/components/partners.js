import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ContentContainer from './uContentContainer'
import H2 from './headings/h2'
import linkArrow from '../images/link-arrow.svg'

export default function Partners ({partners}) {

  return (
    <StyledSection>
      <ContentContainer>
        <H2 heading='tech partners' color='var(--darkGreen)' align='center' />
        <StyledContent>
          {partners.edges.map(item => {
            return (
              <figure>
                <Img fluid={item.node.logo.asset.fluid} />
              </figure>
            )
          })}
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
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(calc(72rem / 6),1fr));
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

const Figure = styled.figure`

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
