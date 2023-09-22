import React from 'react'
import { useState } from 'react'
import Product from '../../Products/Product'
import Footer from '../Components/Footer'
import Logo from '../Components/Logo'
import Cart from './Cart'
import '../../styles.css'

export default function Shop({ items }) {
  const [searchItem, setSearchItem] = useState('')

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

      <div>
        {items.filter((item) => {
          switch (searchItem === '') {
            default:
              if (item === searchItem);
              return item
            case item.itemId.includes(searchItem):
              return item
          }
        })}
      </div>
      <Footer className='sticky' />
    </>
  )
}
