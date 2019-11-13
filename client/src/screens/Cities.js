import React from "react";

import GetCities from "../components/getcities";

import Filter from "../components/filter";

import { connect } from "react-redux";

import { fetchCities } from "../store/actions/cityActions";

import { bindActionCreators } from "redux";

class Cities extends React.Component {
  state = {
    search: ""
  };

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    const { cities } = this.props.cities;
    let filteredCities = cities.filter(city =>
      city.name.toLowerCase().startsWith(this.state.search)
    );

    return (
      <div>
        <Filter changeHandler={this.changeHandler} />
        <GetCities cities={filteredCities} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(fetchCities, dispatch);
};

export default connect(mapStateToProps, mapDispachToProps)(Cities);
