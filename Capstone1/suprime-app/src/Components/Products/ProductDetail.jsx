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
      {images.map((imageDetail, index) => {
        return (
          <div id="products-grid">
            <img key={imageDetail.SKU} id="products" src={imageDetail.front} />
          </div>
        );
      })}
      {items.map((itemDetail, index) => {
        <label htmlFor="products-grid">{itemDetail.item_name}</label>;
      })}
    </div>
  );
}

export default ProductDetail;
