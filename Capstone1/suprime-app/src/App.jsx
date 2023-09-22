import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import Error from './Screens/Error.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/*' element={<App />} errorElement={<Error />} />
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
