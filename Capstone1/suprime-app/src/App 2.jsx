import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/Pages/FrontPage";
import Contact from "./Components/Pages/Forms/Contact";
import Shop from "./Components/Pages/Shop/Shop";
import AdminView from "./Components/Pages/Forms/AdminView";
import Cart from "./Components/Pages/Shop/Checkout/Cart";
import ProtectedRoutes from "./Components/Pages/ProtectedRoutes";
import CartItem from "./Components/Pages/Shop/Checkout/CartItem";
import inventory from "./Data/inventory";

export default function App() {
  const [items, setItems] = useState(inventory.items);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route
            path="/shop"
            exact
            element={<Shop key={items.id} items={items} setItems={setItems} />}
          />
          <Route path="/cart" exact element={<Cart />}>
            <Route
              path="/cart:`${items.id}`"
              exact
              element={<CartItem cartItems={items} />}
            ></Route>
          </Route>
          <Route path="/contact" exact element={<Contact />} />

          <Route
            path="/admin"
            exact
            element={<AdminView stock={items} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
