import React from "react";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import "../Pages/Forms/forms.css";
import Cart from "../Pages/Shop/Checkout/Cart";

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div className="item-grid">
      <img src={item.images1.front} alt={item.item_name} />
      <img src={item.images1.back} alt={item.item_name} />
      <img src={item.images1.detail} alt={item.item_name} />

      <ProductDetail key={item.id} item={item} />
      <button id="sub-btn1" onClick={() => addToCart(item)}>
        add to cart
      </button>
    </div>
  );
}
