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
import Home from './Screens/Home'
import About from './Screens/About'
import Shop from './Screens/Shop'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemList = useSelector((state) => state.itemList)
  const { loading, error, items } = itemList

  const { sku } = useParams()

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              key={items.itemId}
              items={items}
              loading={loading}
              error={error}
              exact
            />
          }
        />
        <Route path='/about' element={<About navigate={navigate} />} />
        <Route
          path='/shop'
          element={
            <Shop
              key={items.itemId}
              items={items}
              loading={loading}
              error={error}
              exact
            />
          }
        />
        <Route />
        <Route />
      </Routes>
    </>
  )
}
