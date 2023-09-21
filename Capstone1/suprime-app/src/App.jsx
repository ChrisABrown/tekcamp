//TODO: Clean up files, current build does not have login capabilities, nor does it have checkout page for the cart,

import React, { useState, useContext, createContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom'
import FrontPage from './Components/Pages/FrontPage'
import Contact from './Components/Pages/Forms/Contact'
import Shop from './Components/Pages/Shop/Shop'
import AdminView from './Components/Pages/Forms/AdminView'
import Cart from './Components/Pages/Shop/Checkout/Cart'
import inventory from './Data/inventory'

export default function App() {
  const [items, setItems] = useState(inventory.items)

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<FrontPage />} />

        <Route
          path='/admin'
          element={
            // <RequireAuth>
            <AdminView key={inventory} stock={items} />
          }
        />

        <Route
          path='/shop'
          exact
          element={<Shop key={items.id} items={items} setItems={setItems} />}
        ></Route>
        <Route path='/shop/cart' exact element={<Cart />} />

        <Route path='/contact' exact element={<Contact />} />

        {/* <ProtectedRoute path="/admin" component={AdminView} isAuth={isAuth} /> */}
      </Routes>
    </Router>
  )
}
