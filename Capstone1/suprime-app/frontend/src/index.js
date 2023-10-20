import React from 'react'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate as navigate,
} from 'react-router-dom'
import App from './client/App.js'
import './client/css/styles.css'
import { Provider } from 'react-redux'
import store from './client/store.js'
import Error from './client/views/Error.js'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { getConfig } from './config'

const onRedirectCallback = (appState) => {
  navigate(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  )
}

const config = getConfig()

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/*' element={<App />} errorElement={<Error />} />
  )
)

createRoot(document.getElementById('root')).render(
  <Auth0Provider {...providerConfig}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Auth0Provider>
)
