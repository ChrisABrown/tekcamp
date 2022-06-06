import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";
import { useState } from "react";
import "../styles.css";
import FormInputs from "./Forms/FormInputs";

export default function FrontPage() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <FormInputs placeholder="Search.." setSearchItem={setSearchItem} />

      <div className="main-page">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}
