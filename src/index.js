import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

import App from "./App";

const container = document.getElementById("app");

const root = ReactDOMClient.createRoot(container);

root.render(<App />);

const getHourGlassArrTotal = (hourglassArr) => {
   return hourglassArr
      .map((arr, i) => {
         if (i === 1) return arr[1];

         return arr.reduce((acc, currentVal) => acc + currentVal, 0);
      })
      .reduce((acc, currentVal) => acc + currentVal, 0);
};
