import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function ServiceItem ({ service: { node } }) {
  const imgData = node.image.asset.fluid
  return (
    <StyledLI key={node.id}>
      <figure>
        <Img fluid={imgData} />
      </figure>
      <StyledContainer>
        <StyledHeading>{node.title}</StyledHeading>
        <p>{node.body}</p>
        <StyledLink>learn more</StyledLink>
      </StyledContainer>
    </StyledLI>
  )
}

const StyledLI = styled.li`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  flex: 1 1 auto;
  max-width: calc(25% - 1rem);
`

const StyledContainer = styled.div`
  padding: 1rem;
`

const StyledHeading = styled.p`
  color: var(--grey);
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  color: var(--grey);
  font-weight: 600;
  line-height: 150%;
  margin-top: .75rem;
  text-transform: capitalize;
`
