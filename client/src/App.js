import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllCities from "./screens/Allcities.js";
import Explore from "./screens/Explore.js";
import Footer from "./components/footer";
import Header from "./components/header";
import Allitineraries from "./screens/Allitineraries.js";
import { loadUser } from "./store/actions/authActions.js";
import { connect } from "react-redux";
import Register from "./screens/Register";
import Login from "./screens/Login";
import SingleCity from "./screens/SingleCity";
import { fetchCities } from "../src/store/actions/cityActions";
import { fetchAllItineraries } from "../src/store/actions/itineraryActions";
import { fetchAllActivities } from "../src/store/actions/activityActions";
import Profile from "../src/screens/Profile";
import Favorites from "../src/screens/Favorites";
import Landing from "../src/screens/Landing";
//import Loader from "../src/components/loader";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCities();
    this.props.fetchAllItineraries();
    this.props.fetchAllActivities();
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
          <Header />
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route exact path="/cities" component={AllCities} />
            <Route path="/itineraries/:name" component={SingleCity} />
            <Route exact path="/itineraries/" component={Allitineraries} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/landing" component={Landing} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries,
    cities: state.cities
  };
};

export default connect(mapStateToProps, { fetchCities, fetchAllItineraries, fetchAllActivities, loadUser })(App);

//{this.props.itineraries && this.props.cities ? null : <Loader />}
