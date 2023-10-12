import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [fixed, setFixed] = useState(true)

  function stickyNavBar() {
    if (window.scrollY > 0) {
      setFixed(false)
    } else {
      setFixed(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', stickyNavBar)

    return () => {
      window.removeEventListener('scroll', stickyNavBar)
    }
  }, [])

  return (
    <footer className={fixed ? ' ' : 'sticky'}>
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
