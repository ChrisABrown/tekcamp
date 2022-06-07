import React from "react";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

const AddToCart = (e) => {
  const [isCartEmpty, setCartToEmpty] = useState(true);
  const [cartItem, setCartItem] = useState([]);

  if (x.qty === cartItem && isCartEmpty === true) {
    return setCartItem([]) + cartItem;
  } else if (isCartEmpty === false) {
    AddToCart(cartItem);
  }
};

function Product({ item }) {
  return (
    <div className="item-grid">
      <img src={item.images1.front} alt={item.item_name} />

      <ProductDetail key={item.id} item={item} />
      <button id="sub-btn1" onClick={AddToCart}>
        add to cart
      </button>
    </div>
  );
}
export default Product;
