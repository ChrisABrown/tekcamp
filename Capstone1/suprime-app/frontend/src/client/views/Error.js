import React from 'react'
import Logo from '../components/Logo.js'
import '../css/error.css'

export default function Error() {
  return (
    <div id='error'>
      <h1 id='universal-error-message'>Something went wrong, Sorry</h1>
      <Logo />
    </div>
  )
}
