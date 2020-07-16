import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.__POWERED_BY_QIANKUN__ = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("container")
);
