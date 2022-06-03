import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/Pages/FrontPage";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Products/ProductList";
import AboutUs from "./Components/Pages/Shop";
import Contact from "./Components/Pages/Contact";
import MailingList from "./Components/Pages/MailingList";
import Shop from "./Components/Pages/Shop";
import AdminView from "./Components/Pages/AdminView";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/mailing-list" exact element={<MailingList />} />
          <Route path="/admin" exact element={<AdminView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
