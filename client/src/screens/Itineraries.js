import React from "react";

import GetItineraries from "../components/getitineraries";

import { connect } from "react-redux";

import { fetchItineraries } from "../store/actions/itineraryActions";

class Itineraries extends React.Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    let activeCity = params.name;
    this.props.fetchItineraries(activeCity);
  }
  render() {
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

export default connect(mapStateToProps, { fetchItineraries })(Itineraries);
