import React from "react";
import Logo from "../Logo/Logo";

export default function AdminView() {
  return (
    <div className="admin">
      <div id="sign-in">
        <Logo />
        <label id="userid">userid</label>
        <input type="text" />
        <label id="usercode">usercode</label>
        <input type="text" />
      </div>
    </div>
  );
}
