import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Cities from "./screens/Cities.js";
import Itineraries from "./screens/Itineraries.js";
import Footer from "./components/footer";
import Header from "./components/header";
import Allitineraries from "./screens/Allitineraries.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/itineraries/:name" component={Itineraries} />
          <Route exact path="/itineraries/" component={Allitineraries} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
