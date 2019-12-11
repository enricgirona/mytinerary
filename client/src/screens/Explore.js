import React from "react";

import GetCities from "../components/getcities";

import { connect } from "react-redux";

import { getPageName } from "../store/actions/pageActions";

class Cities extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.getPageName("Explore");
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    const { cities } = this.props.cities;

    return (
      <div className="main">
        <GetCities cities={cities} />
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
