import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default function ValueCard ({content}) {
  return (
    <FlexContainer>
      <ImgContainer>
        <Img fluid={content.icon.asset.fluid} />
      </ImgContainer>
      <Body>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </Body>
    </FlexContainer>
  )
}

const FlexContainer = styled.li`
  display: flex;

  @media screen and (max-width: 37.5rem) {
    align-items: center;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  flex: 0 1 auto;
  width: 20%;

  @media screen and (max-width: 37.5rem) {
    margin-bottom: 1rem;
    width: 30%;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  @media screen and (max-width: 37.5rem) {
    margin-left: 0;
    text-align: center;
  }
`
