import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchActivities } from "../store/actions/activityActions";

class getitineraries extends Component {
  handleClick = id => {
    fetchActivities(id);
  };
  render() {
    return (
      <div className="inner">
        {this.props.itineraries.map(itinerary => (
          <div className="card" key={itinerary._id} onClick={this.handleClick(itinerary._id)}>
            <p className="card-subtitle">{itinerary.city.toUpperCase()}</p>
            <p className="card-title">{itinerary.title}</p>
            <div className="card-collpase"></div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps, { fetchActivities })(getitineraries);
