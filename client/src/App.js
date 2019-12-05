import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Cities from "./screens/Cities.js";
import Itineraries from "./screens/Itineraries.js";
import Footer from "./components/footer";
import Header from "./components/header";
import Allitineraries from "./screens/Allitineraries.js";
import { loadUser } from "./store/actions/authActions.js";
import { connect } from "react-redux";
import Register from "./screens/Register";
import Login from "./screens/Login";

class App extends React.Component {
  state = {
    pageName: "Explore"
  };

  componentDidMount() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var token = url.searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState(null, null, `${window.location.origin}`);
    }
    this.props.loadUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header currentPage={this.state.pageName} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/cities" component={Cities} />
            <Route path="/itineraries/:name" component={Itineraries} />
            <Route exact path="/itineraries/" component={Allitineraries} />
            <Route exact path="/register" component={Register} />
            <Route exact patch="/login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { loadUser })(App);
