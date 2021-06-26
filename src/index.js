import React from "react";
import { render } from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import App from "./App";

const root = document.getElementById("app");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
