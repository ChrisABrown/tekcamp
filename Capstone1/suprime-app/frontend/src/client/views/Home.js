import React from 'react'

import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js'
import '../css/styles.css'

export default function Home() {
  return (
    <>
      <div id='home-page'>
        <div className='logo'>
          <Logo />
        </div>
        <Navbar />
      </div>
    </>
  )
}
