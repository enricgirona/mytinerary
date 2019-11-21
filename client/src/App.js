import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Cities from "./screens/Cities.js";
import Itineraries from "./screens/Itineraries.js";
import Footer from "./components/footer";
import Header from "./components/header";
import Allitineraries from "./screens/Allitineraries.js";
import loadUser from "./store/actions/authActions.js";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
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
}

export default connect(null, { loadUser })(App);
