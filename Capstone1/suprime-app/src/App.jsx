import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/Pages/FrontPage";
import Contact from "./Components/Pages/Forms/Contact";
import Shop from "./Components/Pages/Shop/Shop";
import AdminView from "./Components/Pages/Forms/AdminView";
import Cart from "./Components/Pages/Shop/Checkout/Cart";
import ProtectedRoutes from "./Components/Pages/ProtectedRoutes";
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
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/contact" exact element={<Contact />} />

          <Route element={ProtectedRoutes}>
            <Route
              path="/admin"
              exact
              element={<AdminView stock={items} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
