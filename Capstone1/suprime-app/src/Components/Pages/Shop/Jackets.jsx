import React from "react";
import Footer from "../../Footer";
import Logo from "../../Logo/Logo";
import ShopTabs from "./ShopTabs";

export default function Jackets() {
  return (
    <div>
      <div id="shop-logo">
        <Logo />
      </div>
      <ShopTabs />
      <Footer />
    </div>
  );
}
