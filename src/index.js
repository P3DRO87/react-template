import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

import App from "./App";

const main = document.getElementById("app");

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   main
);
