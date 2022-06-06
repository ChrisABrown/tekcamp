import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";
import inventory from "../../Data/inventory";
import { useState } from "react";
import "../styles.css";

export default function FrontPage() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <input
        id="search_bar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />

      <div className="main-page">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}
