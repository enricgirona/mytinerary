import React, { Component } from "react";

export default class activities extends Component {
  render() {
    return (
      <div className="activities">
        {this.props.activities.map(activity => (
          <div key={activity._id} className="activity">
            <p>{activity.title}</p>
          </div>
        ))}
      </div>
    );
  }
}
