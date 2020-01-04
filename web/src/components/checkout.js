import React from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'
import icon from '../images/ts-monogram-green.svg'

export default function Checkout ({cart, cartTotal}) {
  const onToken = async (token, addresses) => {
    const items = cart.map(([sku, quantity]) => ({
      type: 'sku',
      parent: sku.id,
      quantity
    }))

    console.log(items)

    let response
    try {
      response = await fetch('/.netlify/functions/orderCreate', {
        method: 'POST',
        body: JSON.stringify({
          token,
          order: {
            currency: 'usd',
            items,
            shipping: {
              name: addresses.shipping_name,
              address: {
                line1: addresses.shipping_address_line1,
                line2: addresses.shipping_address_line2 || '',
                city: addresses.shipping_address_city,
                state: addresses.shipping_address_state,
                postal_code: addresses.shipping_address_zip,
                country: addresses.shipping_address_country_code
              }
            }
          }
        })
      }).then(response => response.json())
    } catch (err) {
      alert(err.message)
    }
  }

  // const testKey = process.env.STRIPE_PUBLISHABLE_KEY
  // console.log(testKey)
  return (
    <StripeCheckout
      token={onToken}
      stripeKey='pk_live_VGxOYq85r4MUMojIWSoDIEDv00STYOLccO'
      name="Collide" // the pop-in header title
      description={`${cart.length} Items`} // the pop-in header subtitle
      image={icon} // the pop-in header image (default none)
      panelLabel="Pay" // prepended to the amount in the bottom pay button
      amount={cartTotal * 100} // cents
      currency="USD"
      locale="en"
      shippingAddress
      billingAddress
      zipCode
      allowRememberMe
    >
      <Button>Checkout for ${cartTotal}</Button>
    </StripeCheckout>
  )
}

const Button = styled.button`
  align-self: center;
  background-color: var(--green);
  border: none;
  border-radius: 2rem;
  color: var(--white);
  font-family: 'TTSupermolot-Regular';
  font-size: .75rem;
  font-weight: 900;
  letter-spacing: .2rem;
  line-height: 150%;
  margin-top: 2rem;
  min-width: 6.5625rem;
  padding: .75rem 2rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`
