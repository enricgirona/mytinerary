import React from "react";

import GetItineraries from "../components/getitineraries";

import { connect } from "react-redux";

import { fetchAllItineraries } from "../store/actions/itineraryActions";

class Allitineraries extends React.Component {
  state = {
    activeCity: ""
  };

  componentDidMount() {
    this.props.fetchAllItineraries();
  }

  render() {
    const { itineraries } = this.props.itineraries;
    return (
      <div className="main">
        <div className="inner">
          <p className="page-title">Itineraries</p>
        </div>
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
