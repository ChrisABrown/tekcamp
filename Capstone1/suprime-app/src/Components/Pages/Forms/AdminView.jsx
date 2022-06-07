import React from "react";
import Logo from "../../Logo/Logo";
import FormInputs from "./FormInputs";
import "./forms.css";

function AdminView(props) {
  const { stock } = props;
  console.log(props);
  return (
    <div id="admin">
      <div id="sign-in">
        <Logo />
        <label className="admin-uiserid">userid</label>
        <FormInputs />
        <label className="admin-userpassword">userpassword</label>
        <FormInputs />
      </div>
      {props.stock.map(({ item_name, quantity, price, SKU }) => {
        return (
          <div className="inventory">
            <ul id="admin_list">
              <li>
                {item_name}
                <FormInputs />
                <ul>
                  <li>{quantity}</li>
                  <FormInputs />
                  <li>${price}</li>
                  <FormInputs />
                  <li>{SKU}</li>
                  <FormInputs />
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default AdminView;
