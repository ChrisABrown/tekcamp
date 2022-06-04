import React from "react";
import ProductList from "../Products/ProductList";
import Footer from "../Footer";
import Logo from "../Logo/Logo";
import images from "../../Data/images.json";

export default function Shop() {
  return (
    <>
      <div id="shop-logo">
        <Logo />
      </div>

      <div className="shop-page">
        <nav className="shop-tabs">
          <a href="/jackets">jackets</a>
          <a href="/hats\accessories">hats/accessories</a>
          <a href="/tops\sweaters">tops/sweaters</a>
          <a href="/shirts">shirts</a>
          <a href="/pants">pants</a>
        </nav>
      </div>

      <ProductList />
      <Footer className="sticky" />
    </>
  );
}
