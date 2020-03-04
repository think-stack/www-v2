import React, { useState, Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/uContentContainer"
import Img from "gatsby-image"
import SEO from "../components/seo"
import CTA from "../components/primaryCta"
import Product from "../components/collideProduct"
import Cart from "../components/cart"
import ContentContainer from "../components/uContentContainer"

export const query = graphql`
  query MyQuery {
    hero: sanityPageHero(title: { regex: "/collide/i" }) {
      heroTitle
      body
      bgImage {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }

    subHead: sanityStandardCta(title: { regex: "/collide/i" }) {
      heading
      body
    }

    products: allSanityCollideProd {
      edges {
        node {
          id
          title
          desc
          price
          sku
          order
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`

export default function CollidePage({ data }) {
  const [cart, setCart] = useState([])
  const { hero, products, subHead } = data

  const [isCartVisible, setCartVisibility] = useState(false)
  const toggleCartVisibility = () => {
    setCartVisibility(!isCartVisible)
  }

  const addProductToCart = e => {
    const { dataset } = e.target
    const item = {
      name: dataset.name,
      sku: dataset.sku,
      price: dataset.price,
    }
    setCart([...cart, item])

    if (!isCartVisible) {
      setCartVisibility(!isCartVisible)
    }
  }

  return (
    <Layout>
      <SEO title="Collide" />
      <Hero>
        <FlexContainer>
          <ContentContainer>
            <H1>{hero.heroTitle}</H1>
            <HeroBody>{hero.body}</HeroBody>
            <HeroFigure>
              <Img fluid={hero.bgImage.asset.fluid} />
            </HeroFigure>
          </ContentContainer>
        </FlexContainer>
      </Hero>
      <Cart
        products={cart}
        isCartVisible={isCartVisible}
        toggleCartVisibility={toggleCartVisibility}
      />
      <CTA content={subHead} />
      <section>
        <Container>
          <GridContainer>
            {products.edges
              .sort((a, b) => a.node.order - b.node.order)
              .map(item => {
                return <Product product={item} addProduct={addProductToCart} />
              })}
          </GridContainer>
        </Container>
      </section>
    </Layout>
  )
}

const Hero = styled.section``

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  min-height: 105vh;
  text-align: center;
`

const H1 = styled.h1`
  color: var(--darkGreen);
  margin-bottom: 2rem;
`

const HeroBody = styled.p`
  margin: auto auto 2rem;
  max-width: 95%;
  width: 30rem;
`

const HeroFigure = styled.figure`
  margin: auto;
  max-width: 50%;
`

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26.5625rem, 1fr));
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  list-style: none;
`
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

const Counter = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5rem;
  text-align: center;
  width: 100%;
`
