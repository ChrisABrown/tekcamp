import React from "react";
import ProductList from "../Products/ProductList";
import Footer from "../Footer";
import Logo from "../Logo/Logo";

export default function Shop() {
  return (
    <div className="product-view">
      <Logo />
      <ProductList />
      <Footer />
    </div>
  );
}
