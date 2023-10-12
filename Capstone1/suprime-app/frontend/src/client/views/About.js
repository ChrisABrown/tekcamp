import React from 'react'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

export default function About() {
  return (
    <>
      <div className='logo'>
        <Logo />
      </div>
      <div className='about-us-page'>
        <section id='about-us'>
          <p>
            In April 1994, Suprime opened its doors on Lafayette Street in
            downtown Manhattan and became the home of New York City skate
            culture. At its core was a group of neighborhood kids, New York
            skaters, and local artists who became the store's staff, crew , and
            customers.
            <br />
            Suprime grew to embody downtown culture , and play an integral part
            in its constant regeneration. Skaters, punks, hip-hop heads - the
            young counter culture at large - all gravitated toward Suprime.
            <br />
            While it developed into a downtown institution, Suprime established
            itself as a brand known for its quality, style, and authenticity.
            <br />
            Over 25 years, Suprime has expanded from its New York City origins
            into a global community; working with generations of artists,
            photographers, designers, musicians, filmmakers, and writers who
            defied conventions and contributed to its unique identity and
            attitude.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}
