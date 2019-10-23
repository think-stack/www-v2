import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import linkArrow from '../images/link-arrow.svg'

export default function ServiceItem ({ service: { node } }) {
  const imgData = node.image.asset.fluid
  return (
    <ListItem>
      <Link to={`/services/${node.slug.current}`}>
        <figure>
          <Img fluid={imgData} />
        </figure>
        <Container>
          <Heading>{node.title}</Heading>
          <P>{node.body}</P>
          <ReadMore>learn more</ReadMore>
        </Container>
      </Link>
    </ListItem>
  )
}

const ListItem = styled.li`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  flex: 1 1 auto;
  max-width: calc(25% - 1rem);
  min-width: 290px;
  transition: transform 400ms ease;

  @media screen and (max-width: 1080px) {
    margin: 0 1rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1024px) {

    &:hover {
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
      transform: scale(1.05)
    }
  }
`

const Container = styled.div`
  padding: 1rem;
`

const Heading = styled.p`
  color: var(--grey);
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 0;
`

const P = styled.p`
  color: var(--black);
  font-weight: 600;
  line-height: 150%;
  margin-top: .75rem;
  text-transform: capitalize;
`
const ReadMore = styled(P)`
  color: var(--grey);
  display: inline;
  font-weight: 900;
  position: relative;

  &:after {
    background-image: url(${linkArrow});
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    height: .75rem;
    left: 105%;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    width: 1rem;
  }
`
