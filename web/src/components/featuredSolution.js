import React from "react"
import styled from "styled-components"

// TODO: use gatsby image for image optimization?

export default function FeaturedSolution({ node }) {
  return (
    <BundleCard>
      {/* change node.Image to node.image */}
      {/* must update in sanity schema as well */}
      <Figure>
        <CardImage src={`${node.image.asset.url}?fit=crop&w=600&h=200`} />
        <CardHeading>{node.title}</CardHeading>
      </Figure>

      <BodyContainer>
        {node.hasOwnProperty("services") && (
          <List>
            {node.services.map(item => (
              <li key={item._key}>{item.children[0].text}</li>
            ))}
          </List>
        )}
        {/* <CardCTA>get info sheet</CardCTA> */}
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
  max-width: 100%;

  @media screen and (min-width: 600px) {
    max-width: 37.5rem;
  }
`

const Figure = styled.figure`
  position: relative;
`

const CardHeading = styled.h3`
  bottom: 1.25rem;
  color: var(--white);
  font-family: "TTSupermolot-Regular";
  font-size: 1.5rem;
  line-height: 1.75rem;
  left: 1.5rem;
  margin-bottom: 0;
  position: absolute;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
    line-height: 2.25rem;
  }
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
