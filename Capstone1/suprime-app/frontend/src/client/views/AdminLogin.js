import React from "react";
import Logo from "../../Logo/Logo";
import FormInputs from "./FormInputs";
import "./forms.css";

function AdminView(props) {
  const { stock } = props;
  return (
    <div id="admin">
      <div id="sign-in">
        <Logo />
        <label className="admin-uiserid">userid</label>
        <FormInputs />
        <label className="admin-userpassword">userpassword</label>
        <FormInputs />
      </div>
    </div>
  );
}

export default AdminView;
