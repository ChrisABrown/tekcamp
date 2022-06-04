import React from "react";

export default function Product({ item }) {
  return (
    <div>
      {item.map((item) => {
        <img src={item.black} />;
      })}
    </div>
  );
}
