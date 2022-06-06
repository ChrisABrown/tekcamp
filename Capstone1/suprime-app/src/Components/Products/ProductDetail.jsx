import React from "react";
import id from "../../App";

export default function ProductDetail({ item }) {
  return (
    <div>
      {item.map(({ item_name }) => {
        return <p key={id}>{item_name}</p>;
      })}
    </div>
  );
}
