import React from "react";
import Logo from "../../Logo/Logo";
import Footer from "../../Footer";
import ShopTabs from "./ShopTabs";

export default function Shirts() {
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