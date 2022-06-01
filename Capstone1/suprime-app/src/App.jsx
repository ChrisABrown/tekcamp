import React from "react";
import { BrowserRouter } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import Navbar from "./Components/Navbar";

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
