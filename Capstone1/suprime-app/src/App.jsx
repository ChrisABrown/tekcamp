import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Products/ProductList";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import MailingList from "./Components/MailingList";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
