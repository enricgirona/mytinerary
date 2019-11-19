import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <div className="user-profile-pic">
            <ion-icon name="ios-contact"></ion-icon>
          </div>
          <div className="toggle">
            <ion-icon name="ios-menu"></ion-icon>
          </div>
        </div>
      </div>
    );
  }
}
