import { HashRouter } from "react-router-dom";
import ElementsRoutes from "./components/routers/ElementsRoutes";

const App = () => {
   return (
      <HashRouter>
         <ElementsRoutes />
      </HashRouter>
   );
};

export default App;
