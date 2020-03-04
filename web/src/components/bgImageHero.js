import React, { useState, useEffect } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
// import ContentContainer from "../components/uContentContainer"
import { Container } from "@material-ui/core"

export default function BgImageHero({ imgData, heading, body }) {
  const [typing, isTyping] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  // split body text and remove white space
  const bodyArr = body.split(",").map(item => item.trim() /*.split('')*/)

  useEffect(() => {
    startTyping()
  })

  function startTyping() {
    if (typing) {
      setTimeout(() => {
        type()
      }, 100)
    } else {
      setTimeout(() => {
        erase()
      }, 50)
    }
  }

  function type() {
    const text = bodyArr[index]

    if (text.length > displayText.length) {
      setDisplayText(text.substr(0, displayText.length + 1))
    } else {
      if (index === bodyArr.length - 1) {
        return null
      } else {
        setTimeout(() => {
          isTyping(false)
          erase()
        }, 2000)
      }
    }
  }

  function erase() {
    if (displayText.length === 0) {
      if (index === bodyArr.length) {
        return null
      } else {
        isTyping(true)
        setIndex(index + 1)
      }
    } else {
      setDisplayText(
        displayText.substr(-displayText.length, displayText.length - 1)
      )
    }
  }

  return (
    <StyledBgImage fluid={imgData}>
      <Container>
        <H1>
          {heading}
          <Span>{displayText}</Span>
        </H1>
      </Container>
    </StyledBgImage>
  )
}

const StyledBgImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  min-height: 37.5625rem;
`

const H1 = styled.h1`
  color: var(--darkGreen);
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4375rem;
  margin-top: 10.9375rem;
  text-transform: capitalize;
`

const Span = styled.span`
  color: var(--darkGreen);
  display: block;
  font-family: var(--headingFont);
  font-size: 3rem;
  font-weight: 900;
  line-height: 3.75rem;
`
