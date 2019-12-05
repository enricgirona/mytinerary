import React from "react";

import GetItineraries from "../components/getitineraries";

import { connect } from "react-redux";

import { fetchAllItineraries } from "../store/actions/itineraryActions";

class Allitineraries extends React.Component {
  componentDidMount() {
    this.props.fetchAllItineraries();
  }

  render() {
    const { itineraries } = this.props.itineraries;
    return (
      <div className="main">
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

export default connect(mapStateToProps, { fetchAllItineraries })(Allitineraries);
