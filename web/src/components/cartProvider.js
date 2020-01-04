import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext()

/*
 Manages the shopping cart, which is persisted in local storage.
 The cart and related methods are shared through context.
*/

const CartProvider = ({children}) => {

  // Load cart from local storage. Initialize if not present or incorrect
  const [contents, setContents] = useState(() => {
    let localCart
    try {
      localCart = JSON.parse(localStorage.getItem('cart'))
    } catch (err) {
      console.error(err.message)
    }
    if (!localCart || !Array.isArray(localCart)) return []
    return localCart
  })

  // Save cart to local storage after load and on update
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(contents))
    } catch (err) {
      console.error(err)
    }
  }, [contents])

  // An array representing the cart in the form of [{sku}, quantity]
  // const cart = contents.map(([id, quantity]) => {
  //   return [skus[id], quantity]
  // })

  // Sets quantity of item with `id`
  function set(id, quantity) {
    // if (!available(id)) return

    const index = contents.findIndex(item => item[0] === id)
    setContents(state => {
      const newState = [...state]
      if (index !== -1) {
        newState[index] = [id, quantity]
      } else {
        newState.push([id, quantity])
      }
      return newState
    })
  }

  // Increments item with `id` by `quantity`, which defaults to 0
  function add(id, quantity = 1) {
    const currentItem = contents.find(item => item[0] === id)
    const currentQuantity = currentItem ? currentItem[1] : 0
    set(id, quantity + currentQuantity)
  }

  const ctx = {
    // contents,
    // cart,
    add,
    // set,
    // remove,
    // available,
    // toggle,
    // count,
    // total,
    // mode
  }

  return (
    <CartContext.Provider value={{ ...ctx }}>{children}</CartContext.Provider>
  )
}

export default CartProvider
