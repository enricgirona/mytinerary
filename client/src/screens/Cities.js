import React, { Component } from "react";

import axios from "axios";

export default class Cities extends Component {
  state = {
    cityList: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/cities/all").then(res => {
      const cityList = res.data;
      this.setState({ cityList });
      console.log(this.state.cityList[0].country);
    });
  }

  render() {
    return (
      <div>
        <p>cities</p>
      </div>
    );
  }
}
