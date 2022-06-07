import React from "react";

const CartItem = (props) => {
  const { purchases, addToCart, removeFromCart } = props;
  const purchasePrice = purchases.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = purchasePrice * 0.0825;
  const shipPrice = purchasePrice > 500 ? 0 : 50;
  const totalPrice = purchasePrice + taxPrice + shipPrice;
  return (
    <div>
      {purchases.length === 0 && <div>cart is empty</div>}
      {purchases.map((purchase) => (
        <div key={purchase.id} className="row">
          <div>{purchase.item_name}</div>
          <div>
            <button
              key={purchases.id}
              onClick={() => addToCart(purchase)}
              className="purchase"
            >
              +
            </button>
            <button
              key={purchases.id}
              onClick={() => removeFromCart(purchase)}
              className="un-purchase"
            >
              -
            </button>
          </div>
          <div className="row below">
            {purchase.qty} x ${purchase.price.toFixed(2)}
          </div>
        </div>
      ))}
      {purchases.length !== 0 && (
        <>
          <hr />
          <div className="row below 2">
            <div>
              <i>price</i>
            </div>
            <div>${purchasePrice.toFixed(2)}</div>
          </div>
          <div className="row below 2">
            <div>
              <i>tax</i>
            </div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row below 2">
            <div>
              <i>shipping</i>
            </div>
            <div>${shipPrice.toFixed(2)}</div>
          </div>
          <div className="row below 2">
            <div>
              <i>total price</i>
            </div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
