import React from 'react'
import { useState } from 'react'
import '../css/styles.css'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import FormInputs from '../components/FormInputs.js'

export default function Contact() {
  const [vals, setVals] = useState({
    firstname: '',
    lastname: '',
    email: '',
    ordernumber: '',
    // message: "",
  })

  const inputs = [
    /*Join these into one: name*/
    {
      id: 1,
      name: 'firstname',
      type: 'text',
      placeholder: 'firstname',
      pattern: `^[a-zA-Z]{3-16}*$`,
      required: true,
      errMessage: 'min 3-16 characters, no numbers',
    },
    {
      id: 2,
      name: 'lastname',
      type: 'text',
      placeholder: 'lastname',
      pattern: `^[a-zA-Z]{3,16}*$`,
      required: true,
      errMessage: 'min 3-16 characters, no numbers',
    },

    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$`,
      required: true,
      errMessage: 'Needs to be a valid email address',
    },
    {
      id: 4,
      name: 'ordernumber',
      type: 'text',
      placeholder: 'order#',
      required: false,
      pattern: '^[A-Za-z]{2}[0-9]+US$',
      errMessage: 'Order number incorrect',
    },
  ]

  const handleSend = (e) => {
    e.preventDefault()
  }
  const onChange = (e) => {
    setVals({ ...vals, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div id='cont-logo'>
        <Logo />
        <h4>contact us</h4>
      </div>
      <div className='contact-page'>
        <form onSubmit={handleSend}>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              val={vals[input.name]}
              onChange={onChange}
            />
          ))}
          <div id='dropdown'>
            <select>
              <option value=''>(select one)</option>
              <option value='1'>press</option>
              <option value='2'>general inquiries</option>
              <option value='3'>order status inquiries</option>
            </select>
          </div>
          <textarea
            name='message'
            id='textarea'
            cols='41'
            rows='10'
            placeholder='message...'
          />
          <div id='btn-contnr'>
            <button id='cont-btn' onClick={handleSend}>
              send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
