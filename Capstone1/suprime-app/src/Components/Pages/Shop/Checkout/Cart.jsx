import React, { useState } from "react";
import "../../Forms/forms.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { cartItems, addToCart, removeFromCart } = props;
  return (
    <aside>
      <h6>your items:</h6>
      <div>
        <CartItem
          purchases={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        ></CartItem>
      </div>
    </aside>
  );
}
