import React from "react";
import Example from "./components/Example";

const App = () => {
   return (
      <div className="container-fluid main">
         <div className="row">
            <div className="col-sm-auto">
               <h1 className="text-center">hola mundo</h1>
               <Example />
            </div>
         </div>
      </div>
   );
};

export default App;
