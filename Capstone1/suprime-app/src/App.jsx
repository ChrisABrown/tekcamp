import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/Pages/FrontPage";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Products/ProductList";
import AboutUs from "./Components/Pages/Shop";
import Contact from "./Components/Pages/Contact";
import MailingList from "./Components/Pages/MailingList";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/shop" exact element={<ProductList />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/mailing-list" exact element={<MailingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
