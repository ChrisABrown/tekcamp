import React from "react";
import Footer from "../Footer";

export default function MailingList() {
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@domain.com"
      />

      <button type="submit">subscribe</button>
      <button type="reset">unsubscribe</button>

      <Footer />
    </div>
  );
}
