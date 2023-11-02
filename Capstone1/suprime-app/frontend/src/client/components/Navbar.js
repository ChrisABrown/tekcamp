import React from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'

export default function Navbar() {
  return (
    <nav>
      <Link to='/' className='links'>
        home
      </Link>
      <Link to='/shop' className='links'>
        shop
      </Link>
      <Link to='/about' className='links'>
        about
      </Link>
      <Link to='/contact' className='links'>
        contact
      </Link>
      <Link to='/admin' className='links'>
        admin
      </Link>
    </nav>
  )
}
