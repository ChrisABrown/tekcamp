import React from "react";
import Logo from "../../../Logo/Logo";
import "../../Forms/forms.css";

export default function Cart({ items }) {
  return (
    <div>
      <Logo />
      <section>
        <h4>your items:</h4>
      </section>
    </div>
  );
}
