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
      <Link to="/lookbook" className="footer-links">
        lookbook
      </Link>
      <Link to="/contact" className="footer-links">
        contact
      </Link>
    </nav>
  );
}
