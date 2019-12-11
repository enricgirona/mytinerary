import React from "react";

import CityList from "../components/citylist";

import Filter from "../components/filter";

import { connect } from "react-redux";

import { getPageName } from "../store/actions/pageActions";

class Cities extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.getPageName("Cities");
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    const { cities } = this.props.cities;
    let filteredCities = cities.filter(city => city.name.toLowerCase().startsWith(this.state.search));

    return (
      <div className="main">
        <Filter changeHandler={this.changeHandler} />
        <CityList cities={filteredCities} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps, { getPageName })(Cities);
