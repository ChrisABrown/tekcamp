import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [fixed, setFixed] = useState(false)

  function stickyNavBar() {
    let nav = document.querySelector('footer')
    let sticky = nav.offsetTop
    if (window.scrollY >= sticky) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  window.addEventListener('scroll', stickyNavBar)

  return (
    <footer>
      <Link to='/' className='footer-links'>
        home
      </Link>
      <Link to='/shop' className='footer-links'>
        shop
      </Link>
      <Link to='/about' className='footer-links'>
        about
      </Link>
      <Link to='/contact' className='footer-links'>
        contact
      </Link>
    </footer>
  )
}
