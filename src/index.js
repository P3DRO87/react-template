import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// rendering components
import Example from "./components/Example";

const main = document.getElementById("app");

ReactDOM.render(<Example />, main);
