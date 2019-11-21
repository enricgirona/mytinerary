import React from "react";

import GetCities from "../components/getcities";

import Filter from "../components/filter";

import { connect } from "react-redux";

import { fetchCities } from "../store/actions/cityActions";

class Cities extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.fetchCities();
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    const { cities } = this.props.cities;
    let filteredCities = cities.filter(city => city.name.toLowerCase().startsWith(this.state.search));

    return (
      <div className="main">
        <div className="inner">
          <p className="page-title">Cities</p>
        </div>
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

export default connect(mapStateToProps, { fetchCities })(Cities);
