import React from "react";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import "../Pages/Forms/forms.css";
import Cart from "../Pages/Shop/Checkout/Cart";

export default function Product({ item }) {
  const [cartItems, setCartItems] = useState([]);
  const onAddToCart = (items) => {
    const itemIsThere = cartItems.find((y) => y.id === items.id);
    if (itemIsThere) {
      setCartItems(
        cartItems.map((y) =>
          y.id === items.id ? { ...itemIsThere, qty: itemIsThere.qty + 1 } : y
        )
      );
    } else {
      setCartItems([...cartItems, { ...items, qty: 1 }]);
    }
  };
  return (
    <div className="item-grid">
      <Cart />
      <img src={item.images1.front} alt={item.item_name} />
      <img src={item.images1.back} alt={item.item_name} />
      <img src={item.images1.detail} alt={item.item_name} />

      <ProductDetail key={item.id} item={item} />
      <button id="sub-btn1" onClick={onAddToCart}>
        add to cart
      </button>
    </div>
  );
}
