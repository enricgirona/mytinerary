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
      <div className="list">
        {this.props.itineraries.map(itinerary => (
          <div key={itinerary._id} id={itinerary._id} onClick={() => this.handleClick(itinerary._id)}>
            <div key={itinerary._id} className="list-item">
              <div className="itinerary-title">
                <p className="title">{itinerary.title}</p>
                <p className="price">{itinerary.price}</p>
              </div>
              <div className="card-collpase">
                <Activities activities={activities.filter(activity => activity.itinerary_id === itinerary._id)} />
              </div>
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
