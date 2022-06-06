import React from "react";
import Footer from "../../Footer";
import Logo from "../../Logo/Logo";
import "./forms.css";

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
            id="eng"
            name="english-japanese"
            type="radio"
            value="english"
          />
          <label id="japanese">japanese</label>
          <input
            id="jap"
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
      <fieldset>
        <label>notify me when the webshop is update with new items</label>
        <input type="checkbox" name="notify" id="webshopnotify" />
      </fieldset>

      <Footer />
    </div>
  );
}
