import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchActivities } from "../store/actions/activityActions";

import Activities from "../components/activities";

class getitineraries extends Component {
  handleClick = id => {
    if (this.props.activities.activities.filter(activity => activity.itinerary_id === id).length === 0) {
      this.props.fetchActivities(id);
    }
    document.getElementById(id).classList.toggle("open");
  };

  render() {
    const { activities } = this.props.activities;
    return (
      <div className="inner">
        {this.props.itineraries.map(itinerary => (
          <div className="card" key={itinerary._id} id={itinerary._id} onClick={() => this.handleClick(itinerary._id)}>
            <p className="card-subtitle">{itinerary.city.toUpperCase()}</p>
            <p className="card-title">{itinerary.title}</p>
            <div className="card-collpase">
              <Activities activities={activities.filter(activity => activity.itinerary_id === itinerary._id)} />
            </div>
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
