import React, { useState } from 'react'
import styled from 'styled-components'
import Checkout from '../components/checkout'

export default function Cart ({products, isCartVisible, toggleCartVisibility}) {


  if (products.length > 0) {

    const total = products.reduce((sum, item) => (sum + Number(item.price)), 0)
    return (
      <>
        <CartToggle type='button' onClick={toggleCartVisibility} isVisible={isCartVisible}>{isCartVisible ? `Close`: `Cart`}</CartToggle>
        <CartContainer isVisible={isCartVisible}>
          <CartList>
            {products.map(item => {
              return (
                <LineItem key={item.sku}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </LineItem>
              )
            })}
            <LineItem><span>Total</span><span>{total}</span></LineItem>
          </CartList>
          <Checkout cart={products} cartTotal={total} />
        </CartContainer>
      </>
    )
  } else {
    return (
      <>
        <CartToggle type='button' onClick={toggleCartVisibility} isVisible={isCartVisible}>{isCartVisible ? `Close`: `Cart`}</CartToggle>
        <CartContainer isVisible={isCartVisible}>
          <p>Cart is empty</p>
        </CartContainer>
      </>
    )
  }
}

const CartToggle = styled.button`
  background-color: var(--green);
  border: none;
  border-radius: 2rem;
  color: var(--white);
  font-family: 'TTSupermolot-Regular';
  font-size: .75rem;
  font-weight: 900;
  letter-spacing: .2rem;
  line-height: 150%;
  min-width: 6.5625rem;
  padding: .75rem 2rem;
  position: fixed;
  right: 0;
  text-transform: uppercase;
  top: 2.5rem;
  transform: ${props => props.isVisible ? `translateX(-20%)` : `translateX(-75%)`};
  transition: transform 600ms ease;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 37.5rem) {
    top: 5.5rem;
    transform: translateX(-20%) ${props => props.isVisible ? `translateY(-110%)` : `translateY(0)`};
  }
`

const CartContainer = styled.div`
  background-color: var(--white);
  left: 100%;
  padding: 6rem 2rem 2rem;
  position: fixed;
  transform: ${props => props.isVisible ? `translateX(-100%)` : `translateX(0)`};
  transition: transform 500ms ease;
  top: 0;
  width: 20rem;
  z-index: 2;
`

const CartList = styled.ul`
  list-style: none;
`

const LineItem = styled.li`
  display: flex;
  justify-content: space-between;
`
