import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ScreenWidth } from "./context/screenwidth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScreenWidth>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ScreenWidth>
  </React.StrictMode>
);

reportWebVitals();
