import React from "react";
import Cart from "../Pages/Forms/Cart";
import id from "../../App";
import ProductDetail from "./ProductDetail";

// function addToCart(cartItem) {
//   if (x === cartItem && isCartEmpty(true){
//     return (
//       x.qty + 1;
//     )
//   })
// }

function Product({ item }, props) {
  const images1 = item.map(({ images1 }) => images1);

  return (
    <div className="item-grid">
      {images1.map(({ front }) => {
        return (
          <>
            <a key={id} href={`/shop/${item.category}`}>
              <img key={id} src={front} alt={item.item_name} />
            </a>
            <p>hello</p>

            <button id="sub-btn1" onClick="">
              add to cart
            </button>
          </>
        );
      })}
    </div>
  );
}
export default Product;
