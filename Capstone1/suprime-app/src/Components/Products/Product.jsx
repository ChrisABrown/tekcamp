import React from "react";
import StockData from "../../Data/inventory.json";
import ImageData from "../../Data/images.json";
import { useState, createContext, useEffect } from "react";

function ProductDetail() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const globalCart = createContext();

  {
    useEffect(() => {
      setImages(ImageData);
      setItems(StockData);
    }, []);
  }

  return (
    <div id="items-grid">
      {images.map((imageDetail) => {
        return (
          <div id="products-grid">
            <a href="/productdetails">
              <img key={imageDetail.id} id="products" src={imageDetail.front} />
            </a>
          </div>
        );
      })}
      {items.map((itemDetail, index) => {
        <p id="products-grid">{itemDetail.item_name}</p>;
      })}
    </div>
  );
}

export default ProductDetail;
