import React from 'react'
import styled from 'styled-components'

export default function ContentContainer ({ children }) {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  @media screen and (max-width: 1240px) {
    padding: 0 2%;
  }
`
