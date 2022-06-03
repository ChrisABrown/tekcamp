import React from "react";
import Footer from "../Footer";
import Logo from "../Logo/Logo";

export default function MailingList() {
  return (
    <div className="mailinglist-page">
      <Logo />
      <label id="email-label">add my email to your mailinglist</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@domain.com"
      />
      <label id="optout-label">i understand i can opt out at any time</label>
      <div className="choices">
        <fieldset>
          <label id="english">english</label>
          <input
            id="japanese"
            name="english-japanese"
            type="radio"
            value="english"
          />
        </fieldset>
        <fieldset>
          <label id="japanese">japanese</label>
          <input
            id="english"
            name="english-japanese"
            type="radio"
            value="japanese"
          />
        </fieldset>
      </div>
      <button id="sub-btn" type="submit">
        subscribe
      </button>
      <button id="unsub-btn">unsubscribe</button>

      <Footer />
    </div>
  );
}
