import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import Example from "./components/Example";
import Example2 from "./components/Example2";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Example} />
        <Route exact path="/example" component={Example2} />
      </Switch>
    </HashRouter>
  );
};

export default App;
