import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";
import "../styles.css";

export default function FrontPage() {
  return (
    <div>
      <div className="main-page">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}
