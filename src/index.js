import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// rendering components
import Example from "./components/Example";

const main = document.getElementById("app");

ReactDOM.render(<Example />, main);
