import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App
      key={item.id}
      SKU={item.sku}
      name={item.name}
      category={item.category}
      quantity={item.quantity}
      imgSrc={item.image}
      sizes={item.size}
      description={item.description}
    />
  </StrictMode>
);

reportWebVitals();
