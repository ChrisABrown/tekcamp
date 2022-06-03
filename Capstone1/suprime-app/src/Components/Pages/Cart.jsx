import React from "react";
import Logo from "../Logo/Logo";

export default function Cart() {
  return (
    <div>
      <Logo />
      <section>
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
