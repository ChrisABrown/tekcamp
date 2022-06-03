import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="footer">
      <Link to="/" className="footer-links">
        home
      </Link>
      <Link to="/shop" className="footer-links">
        shop
      </Link>
      <Link to="/about" className="footer-links">
        about
      </Link>
      <Link to="/contact" className="footer-links">
        contact
      </Link>
      <Link to="/mailing-list" className="footer-links">
        mailinglist
      </Link>
    </nav>
  );
}
