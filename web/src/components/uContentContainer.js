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
`
