import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles.css";

export default function FrontPage() {
  return (
    <div className="main-page">
      <div className="main-page">
        <Logo />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
