import React from "react";
import id from "../../App";

import Product from "./Product";
import ProductDetail from "./ProductDetail";

export default function ProductList({ items }, props) {
  return (
    <div>
      <Product key={id} item={items}>
        <ProductDetail key={id} item={items} />
        {props.children}
      </Product>
    </div>
  );
}
