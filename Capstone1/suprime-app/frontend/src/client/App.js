import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { listItems } from './actions/itemActions.js'
import Home from './views/Home.js'
import About from './views/About.js'
import Shop from './views/Shop.js'
import Contact from './views/Contact.js'
import ProductDetails from './views/ProductDetails.js'
import Cart from './views/Cart.js'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemList = useSelector((state) => state.list)
  const { loading, error, items } = itemList

  useEffect(() => {
    dispatch(listItems())
  }, [dispatch])

  // const { sku } = useParams()

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              items={items}
              loading={loading}
              error={error}
              navigate={navigate}
              exact
            />
          }
        />
        <Route path='/about' element={<About navigate={navigate} />} />
        <Route
          path='/shop'
          element={
            <Shop
              items={items}
              loading={loading}
              error={error}
              navigate={navigate}
              exact
            />
          }
        />

        <Route path='/shop/:sku' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Outlet />
    </>
  )
}
