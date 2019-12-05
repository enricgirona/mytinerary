import React from "react";

import GetItineraries from "../components/getitineraries";

import { connect } from "react-redux";

import { fetchItineraries } from "../store/actions/itineraryActions";

class Itineraries extends React.Component {
  state = {
    activeCity: ""
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    let activeCity = params.name;
    this.props.fetchItineraries(activeCity);
    this.setState({ activeCity: activeCity });
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

export default connect(mapStateToProps, { fetchItineraries })(Itineraries);
