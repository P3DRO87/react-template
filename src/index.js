import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// rendering components
import Test from "./components/Test";

const main = document.getElementById("app");

ReactDOM.render(<Test />, main);
