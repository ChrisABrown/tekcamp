import React from "react";
import Logo from "../../Logo/Logo";
import "./forms.css";

export default function Cart(props) {
  return (
    <div>
      <Logo />
      <section>
        <h2>your items:</h2>
        <form
          id="checkout_form"
          class="easy_form"
          novalidate="novalidate"
          action
          accept-charset="UTF-8"
          method="post"
        >
          <input type="hidden" name="" />
          <input type="hidden" name="" />
          <input type="hidden" name="" />
        </form>
      </section>
    </div>
  );
}