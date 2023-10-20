import React from 'react'

import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js'
import '../css/styles.css'
import LoginButton from '../components/LoginButton.js'

export default function Home(props) {
  const { items, loading, error, navigate } = props
  return (
    <>
      <div id='home-page'>
        <div className='logo'>
          <Logo />
          <div>
            <LoginButton />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  )
}
