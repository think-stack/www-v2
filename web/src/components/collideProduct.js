import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'

export default function Product ({product, addProduct}) {

  const {node: {desc, id, image, price, title, sku} } = product
  return (
    <li key={id} data-sku={sku} data-name={title} data-price={price}>
      <Figure>
        <Img fluid={image.asset.fluid} />
      </Figure>
      <Body>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Body>
      <Button type='button' onClick={addProduct} data-sku={sku} data-name={title} data-price={price}>add to cart</Button>
    </li>
  )
}

const Figure = styled.figure`
  margin: auto;
  max-width: 80%;
`

const Body = styled.div`
  margin: auto;
  text-align: center;
  width: 80%;

  h2 {
    font-size: 1.602rem;
  }
`

const Button = styled.button`
  background-color: var(--black);
  border: 1px solid var(--black);
  border-radius: 1rem;
  color: var(--white);
  display: block;
  font-family: var(--headingFont);
  margin: 0 auto;
  padding: .4rem 1.5rem .3rem;
  text-transform: uppercase;
  width: 10.75rem;
`
