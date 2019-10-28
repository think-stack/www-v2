import React from 'react'
import styled from 'styled-components'

// TODO: use gatsby image for image optimization?

export default function FeaturedSolution ({ node }) {

  return (
    <BundleCard>
    {/* change node.Image to node.image */}
    {/* must update in sanity schema as well */}
      <Figure>
        <CardImage src={node.image.asset.url} />
        <CardHeading>{node.title}</CardHeading>
      </Figure>

      <BodyContainer>
        {(node.hasOwnProperty('services')) &&
          <List>
            {node.services.map(item => <li key={item._key}>{item.children[0].text}</li>)}
          </List>
        }
        <CardCTA>get info sheet</CardCTA>
      </BodyContainer>
    </BundleCard>
  )
}

const BundleCard = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 37.5rem;
`

const Figure = styled.figure`
  position: relative;
`

const CardHeading = styled.h3`
  bottom: 1.25rem;
  color: var(--white);
  font-family: 'TTSupermolot-Regular';
  font-size: 2rem;
  line-height: 2.25rem;
  left: 1.5rem;
  margin-bottom: 0;
  position: absolute;
`

const CardImage = styled.img`
  margin-bottom: 0;
`

const BodyContainer = styled.div`
  padding: 1rem;
`

const List = styled.ul`
  margin-left: 1.5rem;
`

const CardCTA = styled.a`
  background-color: var(--green);
  border: 2px solid;
  border-color: var(--green);
  border-radius: 2.625rem;
  color: var(--white);
  display: inline-block;
  font-family: 'TTSupermolot-Regular';
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.1rem;
  margin: 1rem auto 2rem 0;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: background-color 600ms, border-color 600ms, color 600ms;

  &:hover {
    background-color: var(--white)
    border: 2px solid;
    border-color: var(--green);
    color: var(--green);
    cursor: pointer;

  }
`
