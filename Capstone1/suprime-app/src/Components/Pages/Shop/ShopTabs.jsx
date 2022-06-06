import React from "react";

export default function ShopTabs() {
  return (
    <div>
      <div className="shop-page">
        <nav className="shop-tabs">
          <a href="/shop/jackets">jackets</a>
          <a href="/shop/accessories">hats/accessories</a>
          <a href="/shop/tops">tops/sweaters</a>
          <a href="/shop/shirts">shirts</a>
          <a href="/shop/pants">pants</a>
        </nav>
      </div>
    </div>
  );
}
