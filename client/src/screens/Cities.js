import React from "react";

import axios from "axios";

import GetCities from "../components/getcities";

import Filter from "../components/filter";

export default class Cities extends React.Component {
  state = {
    cities: [],
    search: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/cities/all").then(res => {
      this.setState({ cities: res.data });
    });
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    let filteredCities = this.state.cities.filter(city => city.name.toLowerCase().startsWith(this.state.search));

    return (
      <div>
        <Filter changeHandler={this.changeHandler} />
        <GetCities cities={filteredCities} />
      </div>
    );
  }
}
