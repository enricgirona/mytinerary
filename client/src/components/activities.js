import React, { Component } from "react";

export default class activities extends Component {
  render() {
    return (
      <div className="activities">
        {this.props.activities.map(activity => (
          <p key={activity._id}>{activity.title}</p>
        ))}
      </div>
    );
  }
}
