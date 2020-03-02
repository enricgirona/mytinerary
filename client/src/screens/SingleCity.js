import React from "react";

import GetCities from "../components/getcities";

import { connect } from "react-redux";

import { getPageName } from "../store/actions/pageActions";

class Cities extends React.Component {
  state = {
    activeCity: ""
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    let activeCity = params.name;
    this.setState({ activeCity: activeCity });
    this.props.getPageName("Itineraries in " + activeCity);
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    const { cities } = this.props.cities;
    return (
      <div className="main no-x-scroll">
        <GetCities cities={cities.filter(city => city.name.toLowerCase().match(this.state.activeCity.toLowerCase()))} />
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
