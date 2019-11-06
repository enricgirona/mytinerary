import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Cities from "./screens/Cities.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cities" component={Cities} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
