import React from 'react'
import Product from '../components/Product.js'
import { useState } from 'react'
import Footer from '../components/Footer.js'
import Logo from '../components/Logo.js'
import '../css/styles.css'
import ProductList from '../components/ProductList.js'

export default function Shop({ loading, error, navigate, items }) {
  // const [searchItem, setSearchItem] = useState('')

  return (
    <>
      {/* <input
        id='search-bar'
        value={searchItem}
        placeholder='Search..'
        onChange={(e) => setSearchItem(e.target.value)}
      /> */}
      <div className='logo'>
        <Logo />
      </div>

      <div className='shop-grid'>
        {/* {items.filter((item) => {
          switch (searchItem === '') {
            default:
              if (item.itemId === searchItem);
              return item
            case item.itemId.includes(searchItem):
              return item
          }
        })} */}
        <ProductList
          navigate={navigate}
          items={items}
          loading={loading}
          error={error}
        />
      </div>
      <Footer />
    </>
  )
}
