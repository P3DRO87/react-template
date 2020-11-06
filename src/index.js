import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";

// rendering components
import Badge from "./components/Badge";

const main = document.getElementById("app");

//es importannte pasarle como parametro un elemento (<element />) a reactDom.render
ReactDOM.render(<Badge />, main); // recibe dos argumentos "que elemento"
// "donde" tiene que aparecer el elemento
