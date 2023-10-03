import React from 'react'
import Product from '../components/Product.js'
import { useState } from 'react'
import Footer from '../components/Footer.js'
import Logo from '../components/Logo.js'
import '../css/styles.css'

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

      <div className='shop-grid'>
        {items
          .filter((item) => {
            switch (searchItem === '') {
              default:
                if (item.itemId === searchItem);
                return item
              case item.itemId.includes(searchItem):
                return item
            }
          })
          .map((item) => (
            <Product
              key={item._id}
              item={item}
              imgSrc={item.image}
              sizes={item.size}
              alt={item.description}
            />
          ))}
      </div>
      <Footer className='sticky' />
    </>
  )
}
