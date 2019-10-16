import React from 'react'
import styled from 'styled-components'

import ServiceCard from './serviceItem'

export default function ServiceList ({ services }) {

  return (
    <StyledSection>
      <StyledContainer>
        <StyledHeading>service buckets</StyledHeading>
        <StyledList>
          {services.map(item => {
            return (
                <ServiceCard service={item} />
              )
            })
          }
        </StyledList>
      </StyledContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin: 56px 0 84px;
`

const StyledHeading = styled.h2`
  color: var(--grey);
  font-size: 39px;
  font-weight: 300;
  line-height: 48px;
  text-transform: capitalize;
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`
