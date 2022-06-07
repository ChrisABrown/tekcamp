import React from "react";
import { useState } from "react";
import Product from "../../Products/Product";
import Footer from "../../Footer";
import Logo from "../../Logo/Logo";
import Cart from "./Checkout/Cart";
import "../../styles.css";

export default function Shop({ items }) {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <input
        id="search-bar"
        value={searchItem}
        placeholder="Search.."
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div id="shop-logo">
        <Logo />
      </div>

      <div>
        {items
          .filter((item) => {
            if (searchItem === "") {
              return item;
            } else if (item.item_name.includes(searchItem)) {
              return item;
            }
          })
          .map((item) => (
            <Product
              item={item}
              imgSrc={item.images}
              sizes={item.sizes}
              alt={item.item_name}
            />
          ))}
        <Cart item={items}></Cart>
      </div>
      <Footer className="sticky" />
    </>
  );
}
