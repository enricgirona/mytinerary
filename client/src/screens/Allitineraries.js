import React from "react";

import GetItineraries from "../components/getitineraries";

import Filter from "../components/filter";

import { connect } from "react-redux";

import { fetchAllItineraries } from "../store/actions/itineraryActions";

import { getPageName } from "../store/actions/pageActions";

class Allitineraries extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.fetchAllItineraries();
    this.props.getPageName("Itineraries");
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    const { itineraries } = this.props.itineraries;
    let filteredItineraries = itineraries.filter(itinerary => itinerary.title.toLowerCase().includes(this.state.search));
    return (
      <div className="main">
        <Filter changeHandler={this.changeHandler} />
        <GetItineraries itineraries={filteredItineraries} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};

export default connect(mapStateToProps, { getPageName, fetchAllItineraries })(Allitineraries);
