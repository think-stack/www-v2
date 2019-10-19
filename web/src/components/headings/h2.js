import React from 'react'
import styled from 'styled-components'

export default function H2 ({ heading, color, align }) {
  return (
    <StyledHeading color={color} align={align}>{ heading }</StyledHeading>
  )
}

const StyledHeading = styled.h2`
  color: ${props => props.color};
  font-size: 39px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 0;
  text-align: ${props => props.align || 'left'};
  text-transform: capitalize;
`
