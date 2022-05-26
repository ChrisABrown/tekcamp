// import React from "react";
// import ReactDOM from "react-dom";
// import PostView from "./PostView";
// import "./index.css";

// ReactDOM.render(<PostView />, document.getElementById("root"));

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
  </div>
);
