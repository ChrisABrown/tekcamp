import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./Components/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-xxofmt70.us.auth0.com"
    clientID="nO4OIhqZWt6hTpCfPMdt6Y1I48yzeQS7"
    redirectUri={window.location.origin}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
