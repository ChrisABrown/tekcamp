import React from "react";
import ProductList from "../Products/ProductList";
import Footer from "../Footer";

export default function Shop() {
  return (
    <div className="product-view">
      <ProductList />
      <Footer />
    </div>
  );
}
