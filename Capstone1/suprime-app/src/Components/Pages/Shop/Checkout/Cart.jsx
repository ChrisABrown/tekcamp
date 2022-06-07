import React, { useState } from "react";
import Logo from "../../../Logo/Logo";
import "../../Forms/forms.css";
import CartItem from "./CartItem";

export default function Cart({ items }) {
  const [cartItem, setCartItems] = useState([]);
  const onRemoveFromCart = (e) => {
    const y = CartItem.quantity;
    {
      if (y > 0 && items.id === CartItem.id) {
        y--;
      }
      setCartItems(y);
      return (
        <div>
          <Logo />

          <h6>your items:</h6>

          <div>
            <CartItem onClick={onRemoveFromCart}></CartItem>
          </div>
        </div>
      );
    }
  };
}
