import React, { useState } from "react";
import Cart from "./Cart";

const CartItem = ({ items, onRemoveFromCart }) => {
  const [cartItem, setCartItems] = useState({
    item_name: "",
    id: "",
    SKU: "",
    quantity: "",
    price: "",
  });

  return <div></div>;
};

export default CartItem;
