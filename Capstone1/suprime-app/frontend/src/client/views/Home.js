import React from 'react'

import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js'
import '../css/styles.css'

export default function FrontPage() {
  return (
    <div>
      <div className='main-page'>
        <Logo />
        <Navbar />
      </div>
    </div>
  )
}
