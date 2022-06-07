import React from "react";
import Logo from "../../../Logo/Logo";
import "../../Forms/forms.css";
import CartItem from "./CartItem";

export default function Cart({ items }) {
  const [cartItems, setCartItems] = useState([]);
  const onAddToCart = (e) => {
    const y = cartItem.quantity;
    {
      y === 0 && items.id === cartItems.id ? (
        <div>cart is empty</div>
      ) : (
        setCartItems(y)
      );
      return (
        <div>
          <Logo />

          <h6>your items:</h6>

          <div>
            <CartItem thing={items} />
          </div>
        </div>
      );
    }
  };
}
