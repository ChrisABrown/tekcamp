import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";

import "../styles.css";

export default function FrontPage() {
  return (
    <div className="main-page">
      <input id="search_bar" type="text" placeholder="Search..." />
      <div className="main-page">
        <Logo />
      </div>
      <Navbar />
    </div>
  );
}
