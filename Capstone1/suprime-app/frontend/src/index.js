import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import App from './client/App.js'
import './client/css/styles.css'
import { Provider } from 'react-redux'
import store from './client/store.js'
import Error from './client/views/Error.js'
import { createRoot } from 'react-dom/client'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/*' element={<App />} errorElement={<Error />} />
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
