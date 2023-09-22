import React from "react";
import "../../Forms/forms.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { cartItems, addToCart, removeFromCart } = props;

  return (
    <div id="cart">
      <aside id="cart-contr">
        <h6>your items:</h6>
        <div id="cart-list">
          <CartItem
            key={cartItems}
            purchases={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          ></CartItem>
        </div>
      </aside>
    </div>
  );
}
