import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function TeamCard ({content}) {
  return (
    <li>
      <Figure after={content.bio}>
        <Img fixed={content.image.asset.fixed} style={{maxWidth: `100%`}} />
        <BioContainer className='bio-container'>
          <p>{content.bio}</p>
        </BioContainer>
      </Figure>
      <H2>{content.name}</H2>
      <P>{content.jobTitle}</P>
    </li>
  )
}

const Figure = styled.figure`
  position: relative;

  /*
  &:hover {
    .bio-container {
      background-color: rgba(36, 76, 90, .85);

      p {
        visibility: visible;
      }
    }
  }
  */
`

const BioContainer = styled.div`
  background-color: rgba(36, 76, 90, .0);
  height: 100%;
  left: 0;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  transition: background-color 500ms ease;
  width: 100%;

  p {
    color: var(--white);
    font-style: italic;
    visibility: hidden;
  }
`


const H2 = styled.h2`
  font-size: 2rem;
  line-height: 2.375rem;
  margin: 1.5rem 0 0;
`

const P = styled.p`
  font-style: italic;
`
