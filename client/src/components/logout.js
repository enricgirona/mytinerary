import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import { logout } from "../store/actions/authActions";

import { connect } from "react-redux";

class Logout extends Component {
  render() {
    return (
      <NavLink to="/">
        <button className="button1" onClick={this.props.logout} href="#">
          Logout
        </button>
      </NavLink>
    );
  }
}

export default connect(null, { logout })(Logout);
