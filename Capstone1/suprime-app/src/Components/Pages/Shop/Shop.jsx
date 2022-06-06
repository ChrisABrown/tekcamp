import React from "react";
import Product from "../../Products/Product";
import ProductList from "../../Products/ProductList";
import Footer from "../../Footer";
import Logo from "../../Logo/Logo";
import id from "../../../App";
import ShopTabs from "./ShopTabs";

export default function Shop({ items }) {
  return (
    <>
      <div id="shop-logo">
        <Logo />
      </div>
      <ShopTabs />
      <div>
        <ProductList key={id} items={items}>
          {items.map((item) => (
            <Product
              key={id}
              items={item}
              src={item.images}
              alt={item.item_name}
              href={`/shop/${item.category}/${item.id}`}
            />
          ))}
        </ProductList>
      </div>
      <Footer className="sticky" />
    </>
  );
}
