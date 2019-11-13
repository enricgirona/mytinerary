import React from "react";

import GetItineraries from "../components/getitineraries";

import { connect } from "react-redux";

import { fetchItineraries } from "../store/actions/itineraryActions";

import { bindActionCreators } from "redux";

class Itineraries extends React.Component {
  render() {
    const {
      match: { params }
    } = this.props;
    let activeCity = params.name;
    console.log(activeCity);
    const { itineraries } = this.props.itineraries;
    return (
      <div>
        <GetItineraries itineraries={itineraries} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(fetchItineraries, dispatch);
};

export default connect(mapStateToProps, mapDispachToProps)(Itineraries);
