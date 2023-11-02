import React from 'react'
import { useState } from 'react'
import '../css/styles.css'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import FormInputs from '../components/FormInputs.js'

export default function Contact() {
  const [vals, setVals] = useState({
    name: '',
    email: '',
    ordernumber: '',
    // message: "",
  })

  const inputs = [
    /*Join these into one: name*/
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'name',
      pattern: `^[a-zA-Z]{3-16}*$`,
      required: true,
      errMessage: 'min 3-16 characters, no numbers',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$`,
      required: true,
      errMessage: 'Needs to be a valid email address',
    },
    {
      id: 3,
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
      <div className='contact-page'>
        <div className='logo'>
          <Logo />
        </div>
        <h3>Contact Us</h3>
        <form onSubmit={handleSend}>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              val={vals[input.name]}
              onChange={onChange}
            />
          ))}

          <select className='dropdown'>
            <option value=''>(select one)</option>
            <option value='1'>press</option>
            <option value='2'>general inquiries</option>
            <option value='3'>order status inquiries</option>
          </select>

          <textarea
            name='message'
            id='textarea'
            cols='41'
            rows='10'
            placeholder='message...'
          />
          <button className='cont-btn' onClick={handleSend}>
            send
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}
