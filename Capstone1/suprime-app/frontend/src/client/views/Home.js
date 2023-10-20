import React from 'react'

import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js'
import '../css/styles.css'

export default function Home(props) {
  const { items, loading, error, navigate } = props
  return (
    <>
      <div id='home-page'>
        <div className='logo'>
          <Logo />
          <div></div>
        </div>
        <Navbar />
      </div>
    </>
  )
}
