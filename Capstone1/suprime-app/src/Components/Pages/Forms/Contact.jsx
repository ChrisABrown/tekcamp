import React, { useEffect } from "react";
import { useState } from "react";
import "./forms.css";
import Logo from "../../Logo/Logo";
import Footer from "../../Footer";
import FormInputs from "./FormInputs";

// function showError() {
//   for (let i = 0; i < inputs.length; i++) {
//     let text = inputs[i].value.trim();
//     if (text === "") {
//       errors[i].style.visibility = "visible";
//     } else {
//       errors[i].style.visibility = "hidden";
//     }
//   }
// }

export default function Contact() {
  const [vals, setVals] = useState({
    firstname: "",
    lastname: "",
    email: "",
    ordernumber: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      required: true,
    },
    {
      id: 3,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "email",
      required: true,
    },
    {
      id: 5,
      name: "ordernumber",
      type: "text",
      placeholder: "ordernumber",
      required: false,
    },
    {
      id: 6,
      name: "message",
      type: "textarea",
      cols: 10,
      rows: 8,
      placeholder: "firstname",
      required: true,
    },
  ];

  const handleSend = (e) => {
    setVals({ ...vals, [e.target.name]: e.target.value });
    e.prevent.Default();
  };
  return (
    <div className="contact-page">
      <Logo />
      <form onSubmit={handleSend}>
        {inputs.map((input) => {
          <FormInputs
            key={input.id}
            {...input}
            val={vals[input.name]}
            setVals={setVals}
          />;
        })}

        <button id="sub-btn">send</button>
      </form>

      <Footer />
    </div>
  );
}
