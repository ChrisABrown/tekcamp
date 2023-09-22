import React from 'react'
import { useState } from 'react'
import Product from '../../Products/Product'
import Footer from '../../Footer'
import Logo from '../../Logo/Logo'
import Cart from '../Checkout/Cart'
import '../../styles.css'

export default function Shop({ items }) {
  const [searchItem, setSearchItem] = useState('')
  const [cartItems, setCartItems] = useState([])
  const addToCart = (item) => {
    const itemExist = cartItems.find((y) => y.id === item.id)
    if (itemExist) {
      setCartItems(
        cartItems.map((y) =>
          y.id === items.id ? { ...itemExist, qty: itemExist.qty + 1 } : y
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }])
    }
  }

  const removeFromCart = (item) => {
    const itemExist = cartItems.find((y) => y.id === item.id)
    if (itemExist.qty === 1) {
      setCartItems(cartItems.filter((y) => y.id !== item.id))
    } else {
      setCartItems(
        cartItems.map((y) =>
          y.id === items.id ? { ...itemExist, qty: itemExist.qty - 1 } : y
        )
      )
    }
  }
  return (
    <>
      <input
        id='search-bar'
        value={searchItem}
        placeholder='Search..'
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div id='shop-logo'>
        <Logo />
      </div>
      <Cart
        key={cartItems.id}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      ></Cart>
      <div>
        {items
          .filter((item) => {
            switch (searchItem === '') {
              default:
                if (item === searchItem);
                return item
              case item.itemId.includes(searchItem):
                return item
            }
          })
          .map((item) => (
            
          ))}
      </div>
      <Footer className='sticky' />
    </>
  )
}
