import React from "react";
import Inventory from "../../Data/inventory.json";
import Footer from "../Footer";

export default function ProductList() {
  {
    const images = Inventory.map(({ images }) => images);
    console.log(images);
    images.map(({ front, back, white }) => {
      return (
        <div>
          <img key={Inventory.sku} src={front} />
        </div>
      );
    });
  }
}
