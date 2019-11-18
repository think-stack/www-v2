import React, { useState } from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'
import Container from '../components/uContentContainer'
import H2 from '../components/headings/h2'


export default function ModalCta ({icon}) {

  const [modalIsActive, setModalState] = useState(false)

  const toggle = () => setModalState(!modalIsActive)

  return (
    <Section>
      <Container>
        <H2 heading='Service is all in the delivery' color='var(--darkGreen)' align='center' weight='700'></H2>
        <Body>We put people before tech.</Body>
        <Img fluid={icon.childImageSharp.fluid} style={{width: `3.4375rem`, cursor: `pointer`}} onClick={toggle} />
      </Container>
      <Modal isActive={modalIsActive}>
        <ModalContainer>
          <Img fluid={icon.childImageSharp.fluid} style={{width: `3.4375rem`, cursor: `pointer`, marginBottom: `2rem` }} onClick={toggle} />
          <H2 heading='Service is all in the delivery' color='var(--darkGreen)' align='center' weight='700'></H2>
          <ModalBody>Pellentesque libero nulla, rhoncus ultrices rhoncus vel, efficitur ac ligula. Sed ipsum risus, suscipit et diam in, feugiat pretium nisi</ModalBody>
        </ModalContainer>
      </Modal>
    </Section>
  )
}

const Section = styled.section`
  margin: 0 0 2.625rem;

  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`

const Body = styled.p`
  color: var(--darkGreen);
  font-family: var(--headingFont);
  font-size: 1.5rem;
  margin: .5rem auto 2.625rem;
  max-width: 30rem;
  position: relative;
  text-align: center;

  &:after {
    background-color: var(--darkGreen);
    bottom: -1.3125rem;
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 2.5rem;
  }
`

const Modal = styled.div`
  bottom: 0;
  background: rgba(255, 255, 255, .95);
  display: flex;
  height: 100%;
  left: 0;
  opacity: .95;
  position: fixed;
  right: 0;
  top: 0;
  visibility: ${props => props.isActive ? `visible` : `hidden`};
  width: 100%;
  z-index: ${props => props.isActive ? `2` : `-1`};
`

const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 80rem;
`

const ModalBody = styled.p`
  color: var(--darkGreen);
  font-family: var(--headingFont);
  font-size: 1.5rem;
  margin: .5rem auto 2.625rem;
  max-width: 30rem;
  text-align: center;
`
