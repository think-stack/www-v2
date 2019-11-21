import React from 'react'
import styled from 'styled-components'

import ContentContainer from './uContentContainer'
import ServiceItem from './serviceItem'

export default function ServiceList ({ services }) {

  return (
    <StyledSection>
      <ContentContainer>
        <StyledHeading>service buckets</StyledHeading>
        <StyledList>
          {services.map((item, index) => {
            return (
                <ServiceItem service={item} key={item.node.id} />
              )
            })
          }
        </StyledList>
      </ContentContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin: 56px 0 84px;
`

const StyledHeading = styled.h2`
  color: var(--darkGreen);
  font-size: 39px;
  font-weight: 300;
  line-height: 48px;
  text-transform: capitalize;
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 1080px) {
    overflow: scroll;
  }
`

const Container = styled(ContentContainer)`
  overflow: hidden;
`
