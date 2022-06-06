import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/Pages/FrontPage";
import Contact from "./Components/Pages/Forms/Contact";
import MailingList from "./Components/Pages/Forms/MailingList";
import Shop from "./Components/Pages/Shop/Shop";
import Jackets from "./Components/Pages/Shop/Jackets";
import Tops from "./Components/Pages/Shop/Tops";
import Shirts from "./Components/Pages/Shop/Shirts";
import Pants from "./Components/Pages/Shop/Pants";
import Accessories from "./Components/Pages/Shop/Accessories";
import AdminView from "./Components/Pages/Forms/AdminView";
import Cart from "./Components/Pages/Forms/Cart";
import ProtectedRoutes from "./Components/Pages/ProtectedRoutes";
import inventory from "./Data/inventory";

export default function App() {
  const stock = inventory;
  const items = stock.items;
  const id = stock.items.map((id) => id);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/shop" exact element={<Shop key={id} items={items} />} />
          <Route path="/cart" exact element={<Cart key={id} items={items} />} />
          <Route
            path="/shop/jackets"
            exact
            element={<Jackets key={id} items={items} />}
          />
          <Route
            path="/shop/accessories"
            exact
            element={<Accessories key={id} items={items} />}
          />
          <Route
            path="/shop/tops"
            exact
            element={<Tops key={id} items={items} />}
          />
          <Route
            path="/shop/shirts"
            exact
            element={<Shirts key={id} items={items} />}
          />
          <Route
            path="/shop/pants"
            exact
            element={<Pants key={id} items={items} />}
          />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/mailing-list" exact element={<MailingList />} />
          <Route element={ProtectedRoutes}>
            <Route path="/admin" exact element={<AdminView />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
