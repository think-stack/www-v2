import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default function ValueCard ({content}) {
  return (
    <FlexContainer>
      <ImgContainer>
        <Img fixed={content.icon.asset.fixed} />
      </ImgContainer>
      <Body>
        <h3>{content.title}</h3>
        <p>{content.body}</p>
      </Body>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display: flex;
`

const ImgContainer = styled.div`
  flex: 0 1 auto;
  width: 20%;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`
