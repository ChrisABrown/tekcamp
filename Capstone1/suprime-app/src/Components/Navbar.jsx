import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/news">news</Link>
        <Link to="/contact">contact</Link>
        <Link to="/mailing-list">mailinglist</Link>
      </nav>
    </div>
  );
}
