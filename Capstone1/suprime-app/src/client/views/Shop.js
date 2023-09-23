import React from 'react'
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
