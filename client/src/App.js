import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Cities from "./screens/Cities.js";
import Itineraries from "./screens/Itineraries.js";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/cities/:name" component={Itineraries} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
