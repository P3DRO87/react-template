import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";

export const routes = () => [
   { path: "/", element: <Home /> },
   { path: "contact", element: <Contact /> },
];
