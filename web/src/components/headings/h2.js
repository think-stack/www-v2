import React from 'react'
import styled from 'styled-components'

export default function H2 ({ heading, color }) {
  return (
    <StyledHeading color={ color }>{ heading }</StyledHeading>
  )
}

const StyledHeading = styled.h2`
  color: ${props => props.color};
  font-size: 39px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 0;
  text-transform: capitalize;
`
