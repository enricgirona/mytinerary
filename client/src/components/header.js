import React, { Component } from "react";

import { NavLink } from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <NavLink to={"/register"}>
            <div className="user-profile-pic">
              <ion-icon name="ios-contact"></ion-icon>
            </div>
          </NavLink>
          <p className="page-title">{this.props.currentPage}</p>
          <NavLink to={"/login"}>
            <div className="toggle">
              <ion-icon name="ios-menu"></ion-icon>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}
