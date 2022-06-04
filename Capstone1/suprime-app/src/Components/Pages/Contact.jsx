import React from "react";
import "../styles.css";
import Logo from "../Logo/Logo";
import Footer from "../Footer";

// function toggleDropdown(selObj) {
//   const value =

// }

export default function Contact() {
  return (
    <div className="contact-page">
      <Logo />

      <section id="form">
        <form id="contact-form">
          <p>contact Suprime</p>
          <br />

          <div className="input-rows">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="first name"
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="last name"
            />

            <input type="email" name="email" id="email" placeholder="email" />

            <input
              type="hidden"
              name="order number"
              id="order number"
              placeholder="order number"
            />
          </div>
          <select id="dropdown" name="dropdown">
            <option value="order">online order status requests</option>
            <option value="order">online return or exchange request</option>
            <option value="order">online order lost package</option>
            <option value="1">general inquiries</option>
            <option value="2">press</option>
          </select>
          <label id="textarea">message</label>
          <textarea name="message" id="message" cols="40" rows="10"></textarea>
          <button id="btn" type="submit">
            send
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
