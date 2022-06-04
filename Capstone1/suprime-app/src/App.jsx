import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/Pages/FrontPage";
import Lookbook from "./Components/Pages/Lookbook";
import Contact from "./Components/Pages/Contact";
import MailingList from "./Components/Pages/MailingList";
import Shop from "./Components/Pages/Shop";
import AdminView from "./Components/Pages/AdminView";
import ProtectedRoutes from "./Components/Pages/ProtectedRoutes";
import images from "./Data/images.json";

export default function App() {
  const { items } = images;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/shop" exact element={<Shop items={items} />} />
          <Route path="/Lookbook" exact element={<Lookbook />} />
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
